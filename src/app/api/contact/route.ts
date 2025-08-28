import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY no está configurada');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // Para reCAPTCHA v3, verificamos el score además del success
    if (data.success && data.score) {
      // Umbral de puntuación - 0.5 es un valor común, pero puede ajustarse
      const threshold = 0.5;
      return data.score >= threshold;
    }
    
    return data.success;
  } catch (error) {
    console.error('Error verificando reCAPTCHA:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, recaptchaToken } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Token reCAPTCHA requerido' },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Verificación reCAPTCHA fallida' },
        { status: 400 }
      );
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@fumiplagrd.do',
      to: [process.env.TO_EMAIL || 'contacto@fumiplagrd.do'],
      subject: `Nueva consulta de ${name} - ${serviceType || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">Nueva Consulta - FUMIPLAG</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #34495e; margin-top: 0;">Información del Cliente</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
              <p><strong>Tipo de Servicio:</strong> ${serviceType || 'No especificado'}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px;">
              <h3 style="color: #34495e; margin-top: 0;">Mensaje</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 6px;">
              <p style="margin: 0; color: #27ae60; font-size: 14px;">
                <strong>Nota:</strong> Responder a este cliente lo antes posible para mantener la calidad del servicio.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email enviado correctamente', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}