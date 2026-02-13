const nodemailer = require("nodemailer");

// Email service stub - configure with real SMTP in production
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER || "noreply@afghanibaba.com",
    pass: process.env.EMAIL_PASSWORD || "app-password",
  },
});

const sendBookingConfirmation = async (email, bookingData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || "noreply@afghanibaba.com",
      to: email,
      subject: `Booking Confirmation - ${bookingData.bookingId}`,
      html: `
        <h2>Your Ticket Booking Confirmed</h2>
        <p>Booking ID: ${bookingData.bookingId}</p>
        <p>Date: ${new Date(bookingData.bookingDate).toLocaleDateString()}</p>
        <p>Total Amount: $${bookingData.totalPrice}</p>
        <p>Thank you for using afghanibaba!</p>
      `,
    };

    if (process.env.NODE_ENV === "production") {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Email notification (test mode):", mailOptions);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

const sendCancellationEmail = async (email, bookingData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || "noreply@afghanibaba.com",
      to: email,
      subject: `Booking Cancelled - ${bookingData.bookingId}`,
      html: `
        <h2>Your Booking Has Been Cancelled</h2>
        <p>Booking ID: ${bookingData.bookingId}</p>
        <p>Refund will be processed within 3-5 business days.</p>
        <p>For support, contact: support@afghanibaba.com</p>
      `,
    };

    if (process.env.NODE_ENV === "production") {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Cancellation email (test mode):", mailOptions);
    }
  } catch (error) {
    console.error("Failed to send cancellation email:", error);
  }
};

module.exports = { sendBookingConfirmation, sendCancellationEmail };
