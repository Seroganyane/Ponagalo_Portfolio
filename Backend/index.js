require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); 
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


// Simple health check
app.get('/api/ping', (req, res) => res.json({ ok: true }));


app.post('/api/contact', async (req, res) => {
const { name, email, message } = req.body;
if (!name || !email || !message) return res.status(400).send('Missing required fields');


// Create transporter using environment variables. Set these in .env
// Example using Gmail (if using Gmail, you may need an app password)
const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST || 'smtp.gmail.com',
port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
secure: process.env.SMTP_SECURE === 'true',
auth: {
user: process.env.SMTP_USER,
pass: process.env.SMTP_PASS,
}
});

0
const mailOptions = {
from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
to: process.env.CONTACT_RECEIVER, // your email to receive messages
subject: `New message from ${name}`,
text: `Name: ${name}
Email: ${email}


${message}`,
html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
};


try {
await transporter.sendMail(mailOptions);
res.json({ ok: true });
} catch (err) {
console.error('Mail error:', err);
res.status(500).send('Failed to send email');
}
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));