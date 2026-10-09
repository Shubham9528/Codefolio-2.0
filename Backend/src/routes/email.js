import express from 'express';
import { sendContactEmail } from '../config/nodemailer.js';

const router = express.Router();

// POST endpoint to handle contact form submissions
router.post('/send', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Send email using nodemailer
    const result = await sendContactEmail({ name, email, subject, message });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

export default router;
