import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar-contacto', async (req, res) => {
  const { name, lastname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'innovainfo.io@gmail.com',
      pass: 'rdwkgaxsjsjztymn',
    },
  });

  const mailOptions = {
    from: email,
    to: 'innovainfo.io@gmail.com',
    subject: `Nuevo mensaje de ${name} ${lastname}`,
    text: `Nombre: ${name} ${lastname}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});