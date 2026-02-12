const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    pricePerNight: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "USD" },
    stars: { type: Number, default: 3, min: 1, max: 5 },
    amenities: { type: [String], default: [] },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", HotelSchema);
