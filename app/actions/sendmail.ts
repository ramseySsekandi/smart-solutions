'use server'

import { IContactInputs } from "@/types/mail-forms";
import nodemailer from 'nodemailer';
import { Message } from '@prisma/client';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactMail(data:IContactInputs){
    try {
        const mailOptions = {
            from: data.email,
            to: process.env.MAIL_RECEIVER_ADDRESS,
            subject: data.name,
            text: data.message,
            html:'',
        };

        // SEND EMAIL
        await transporter.sendMail(mailOptions)
        return {
            success: true,
            error: null
        }
    } catch (error) {
        console.log(error)
    }
}

export async function sendStatusUpdateEmail(message: Message, newStatus: string) {
  const emailContent = `
    <h2>Message Status Updated</h2>
    <p>A message from ${message.name} has been marked as ${newStatus}.</p>
    <p><strong>Original Message:</strong></p>
    <p>${message.message}</p>
    <p><a href="${process.env.NEXT_PUBLIC_URL}/dashboard/messages">View in Dashboard</a></p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: message.email,
      subject: `Your message has been ${newStatus.toLowerCase()}`,
      html: emailContent,
    });

    // Send notification to admin as well
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: `Message ${newStatus}: ${message.name}`,
      html: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send status update email:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}