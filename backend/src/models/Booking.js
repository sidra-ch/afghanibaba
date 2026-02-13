const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
    idNumber: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const BookingSchema = new mongoose.Schema(
  {
    busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    seats: { type: [Number], required: true },
    passengers: { type: [PassengerSchema], required: true },
    totalPrice: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ["pending", "paid", "cancelled"], default: "pending" },
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    discountApplied: { type: Number, default: 0, min: 0 },
    serviceFee: { type: Number, default: 0, min: 0 },
    bookingDate: { type: Date, default: Date.now },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
