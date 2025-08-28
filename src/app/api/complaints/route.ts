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
    const { name, email, phone, serviceDate, complaintType, description, recaptchaToken } = await request.json();

    // Validación básica
    if (!name || !email || !complaintType || !description) {
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
      subject: `🚨 QUEJA RECIBIDA - ${complaintType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px;">
            <h2 style="color: #856404; margin-bottom: 20px; display: flex; align-items: center;">
              🚨 Nueva Queja Recibida - FUMIPLAG
            </h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin-top: 0;">Información del Cliente</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
              <p><strong>Fecha del Servicio:</strong> ${serviceDate || 'No especificada'}</p>
              <p><strong>Tipo de Queja:</strong> <span style="background-color: #f8d7da; padding: 2px 8px; border-radius: 4px; color: #721c24;">${complaintType}</span></p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin-top: 0;">Descripción de la Queja</h3>
              <p style="line-height: 1.6; color: #555; background-color: #f8f9fa; padding: 15px; border-radius: 4px;">${description}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f8d7da; border-radius: 6px; border: 1px solid #f5c6cb;">
              <p style="margin: 0; color: #721c24; font-size: 14px;">
                <strong>⚠️ ACCIÓN REQUERIDA:</strong> Esta queja requiere atención inmediata. Por favor, contactar al cliente dentro de las próximas 24 horas para resolver la situación.
              </p>
            </div>
            
            <div style="margin-top: 15px; padding: 10px; background-color: #d1ecf1; border-radius: 6px; border: 1px solid #bee5eb;">
              <p style="margin: 0; color: #0c5460; font-size: 12px;">
                <strong>Fecha de recepción:</strong> ${new Date().toLocaleString('es-DO', { timeZone: 'America/Santo_Domingo' })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando email de queja:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Queja enviada correctamente', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API de quejas:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}