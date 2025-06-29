"use server";
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactEmail } from '@/components/email/ContactEmail';
import { QuotationEmail } from '@/components/email/QuotationEmail';
import { FeedbackEmail } from '@/components/email/FeedbackEmail';
import { revalidatePath } from 'next/cache';

export async function respondToContactWithEmail(id: string, response: string) {
  const contact = await prisma.contact.update({
    where: { id },
    data: { responded: true, response },
  });
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
      <ContactEmail name={contact.name} email={contact.email} message={`Admin response: ${response}`} />
    );
    const mailOptions = {
      from: process.env.MAIL_RECEIVER_ADDRESS,
      to: contact.email,
      subject: `Response to your contact submission` ,
      html: emailHtml,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending contact response email:', error);
  }
  await prisma.contact.delete({ where: { id } });
  revalidatePath('/dashboard/contacts');
  return { success: true };
}

export async function respondToQuotationWithEmail(id: string, response: string) {
  const quotation = await prisma.quotation.update({
    where: { id },
    data: { responded: true, response },
  });
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
      <QuotationEmail name={quotation.name} email={quotation.email} service={quotation.service || ''} details={`Admin response: ${response}`} />
    );
    const mailOptions = {
      from: process.env.MAIL_RECEIVER_ADDRESS,
      to: quotation.email,
      subject: `Response to your quotation request` ,
      html: emailHtml,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending quotation response email:', error);
  }
  await prisma.quotation.delete({ where: { id } });
  revalidatePath('/dashboard/quotations');
  return { success: true };
}

export async function respondToFeedbackWithEmail(id: string, response: string) {
  const feedback = await prisma.feedback.update({
    where: { id },
    data: { responded: true, response },
  });
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
      <FeedbackEmail name={feedback.name} email={feedback.email} feedback={`Admin response: ${response}`} />
    );
    const mailOptions = {
      from: process.env.MAIL_RECEIVER_ADDRESS,
      to: feedback.email,
      subject: `Response to your feedback` ,
      html: emailHtml,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending feedback response email:', error);
  }
  await prisma.feedback.delete({ where: { id } });
  revalidatePath('/dashboard/feedback');
  return { success: true };
} 