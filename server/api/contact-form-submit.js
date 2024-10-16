import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, phone, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: '"Kontaktformular" <dein-email@example.com>',
    to: process.env.EMAIL_RECIPIENT,
    subject: 'Neue Kontaktanfrage',
    text: `Name: ${name}\nTelefonnummer: ${phone}\nNachricht: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
});