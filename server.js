const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL@gmail.com',
      pass: 'YOUR_APP_PASSWORD'
    }
  });

  const mailOptions = {
    from: email,
    to: 'TARGET_EMAIL@gmail.com',
    subject: `New message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (err) {
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
