const express = require("express");
const mongoose = require("mongoose");

const Booking = require("../models/Booking");
const Payment = require("../models/Payment");

const router = express.Router();

// Stripe test keys (use environment variables in production)
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "sk_test_stub_key";
const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY || "pk_test_stub_key";

router.post("/", async (req, res) => {
  try {
    const { bookingId, totalPrice, method } = req.body;

    if (!bookingId || !totalPrice) {
      return res.status(400).json({ error: "MISSING_REQUIRED_FIELDS" });
    }

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ error: "INVALID_BOOKING_ID" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "BOOKING_NOT_FOUND" });
    }

    const sessionId = `pay_${Date.now()}`;
    const payment = await Payment.create({
      bookingId,
      amount: Number(totalPrice),
      method: method || "online",
      status: "pending",
      providerRef: sessionId,
    });

    booking.paymentStatus = "pending";
    await booking.save();

    // In production, integrate with Stripe API to create actual checkout session
    // For now, return test payment session with redirect to booking confirmation
    res.status(201).json({
      sessionId,
      clientSecret: `pi_test_${Date.now()}`,
      paymentUrl: `/payment/confirm?bookingId=${bookingId}&paymentId=${payment._id}`,
      bookingId,
      totalPrice,
      status: "pending",
      paymentId: payment._id,
    });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_CREATE_PAYMENT" });
  }
});

// Webhook for Stripe (stub for testing)
router.post("/webhook", async (req, res) => {
  try {
    const { paymentId, status } = req.body;

    if (!paymentId || !status) {
      return res.status(400).json({ error: "MISSING_FIELDS" });
    }

    const payment = await Payment.findByIdAndUpdate(
      paymentId,
      { status },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ error: "PAYMENT_NOT_FOUND" });
    }

    if (status === "paid") {
      const booking = await Booking.findByIdAndUpdate(
        payment.bookingId,
        { paymentStatus: "paid" },
        { new: true }
      );
    }

    res.json({ success: true, payment });
  } catch (error) {
    res.status(500).json({ error: "WEBHOOK_FAILED" });
  }
});

module.exports = router;
