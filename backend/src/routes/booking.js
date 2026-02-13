const express = require("express");
const mongoose = require("mongoose");

const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

const router = express.Router();

const normalizeSeats = (seats) =>
  Array.from(new Set(seats.map((seat) => Number(seat)))).filter((seat) => Number.isFinite(seat));

router.post("/", async (req, res) => {
  try {
    const { busId, seats, passengers, totalPrice, date, userId, discountApplied, serviceFee } = req.body;

    if (!busId || !Array.isArray(seats) || !Array.isArray(passengers) || !date) {
      return res.status(400).json({ error: "MISSING_REQUIRED_FIELDS" });
    }

    if (!mongoose.Types.ObjectId.isValid(busId)) {
      return res.status(400).json({ error: "INVALID_BUS_ID" });
    }

    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ error: "BUS_NOT_FOUND" });
    }

    const normalizedSeats = normalizeSeats(seats);
    if (normalizedSeats.length === 0) {
      return res.status(400).json({ error: "NO_SEATS_SELECTED" });
    }

    if (bus.seats > 0 && normalizedSeats.some((seat) => seat < 1 || seat > bus.seats)) {
      return res.status(400).json({ error: "SEAT_OUT_OF_RANGE" });
    }

    const alreadyBooked = normalizedSeats.filter((seat) => bus.bookedSeats.includes(seat));
    if (alreadyBooked.length > 0) {
      return res.status(409).json({ error: "SEATS_ALREADY_BOOKED", seats: alreadyBooked });
    }

    const bookingDate = date ? new Date(date) : new Date();
    const booking = await Booking.create({
      busId,
      userId,
      seats: normalizedSeats,
      passengers,
      totalPrice: Number(totalPrice) || normalizedSeats.length * bus.price,
      discountApplied: Number(discountApplied) || 0,
      serviceFee: Number(serviceFee) || 0,
      paymentStatus: "pending",
      bookingDate: Number.isNaN(bookingDate.getTime()) ? new Date() : bookingDate,
      date,
    });

    const updatedBookedSeats = [...bus.bookedSeats, ...normalizedSeats];
    bus.bookedSeats = Array.from(new Set(updatedBookedSeats));
    if (bus.seats > 0) {
      bus.seatsAvailable = Math.max(bus.seats - bus.bookedSeats.length, 0);
    }

    await bus.save();

    res.status(201).json({ item: booking });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_CREATE_BOOKING" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Booking.findById(req.params.id).populate("busId");
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_BOOKING" });
  }
});

router.post("/:id/cancel", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({ error: "ALREADY_CANCELLED" });
    }

    // Only allow cancellation of pending payments or unpaid bookings (within 24 hours)
    const bookingTime = new Date(booking.bookingDate).getTime();
    const currentTime = new Date().getTime();
    const hoursSinceBooking = (currentTime - bookingTime) / (1000 * 60 * 60);

    if (hoursSinceBooking > 24) {
      return res.status(400).json({ error: "CANCELLATION_WINDOW_EXPIRED" });
    }

    // Release seats
    const bus = await Bus.findById(booking.busId);
    if (bus) {
      bus.bookedSeats = bus.bookedSeats.filter((seat) => !booking.seats.includes(seat));
      bus.seatsAvailable = Math.max(bus.seats - bus.bookedSeats.length, 0);
      await bus.save();
    }

    // Update booking status
    booking.status = "cancelled";
    await booking.save();

    res.json({ item: booking, message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_CANCEL_BOOKING" });
  }
});

module.exports = router;
