import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, to } = req.body;

    if (!name || !email || !message || !to) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Use environment variable for email
          pass: process.env.EMAIL_PASS, // Use environment variable for password
        },
      });

      const mailOptions = {
        from: email,
        to,
        subject: `New message from ${name}`,
        text: message,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}