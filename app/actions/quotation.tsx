"use server";
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { QuotationEmail } from '@/components/email/QuotationEmail';
import { revalidatePath } from 'next/cache';

export async function submitQuotation({ name, email, phone, service, description }: { name: string; email: string; phone: string; service: string; description: string }) {
  // Save to DB
  const quotation = await prisma.quotation.create({
    data: {
      name,
      email,
      phone,
      service,
      details: description,
      responded: false,
    },
  });

  // Send email notification
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailHtml = await render(
      <QuotationEmail name={name} email={email} service={service} details={description} />
    );

    const mailOptions = {
      from: email,
      to: [process.env.MAIL_RECEIVER_ADDRESS, email].filter(Boolean).join(","),
      subject: `New Service Request from ${name} at ${phone} requesting for ${service}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending quotation email:', error);
    // Optionally, handle email failure (but still return success for DB save)
  }

  revalidatePath('/dashboard/quotations');
  return { success: true };
} 