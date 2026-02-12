const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },
    origin: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "USD" },
    seatsAvailable: { type: Number, default: 0, min: 0 },
    busType: { type: String, default: "Standard" },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bus", BusSchema);
