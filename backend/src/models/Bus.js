const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema(
  {
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    company: { type: String, required: true, trim: true },
    origin: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "USD" },
    seats: { type: Number, default: 0, min: 0 },
    bookedSeats: { type: [Number], default: [] },
    seatsAvailable: { type: Number, default: 0, min: 0 },
    busType: { type: String, default: "Standard" },
    discountToday: { type: Number, default: 0, min: 0 },
    serviceFee: { type: Number, default: 0, min: 0 },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bus", BusSchema);
