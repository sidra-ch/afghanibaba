const mongoose = require("mongoose");

const ResidenceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    pricePerNight: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "USD" },
    rooms: { type: Number, default: 1, min: 1 },
    amenities: { type: [String], default: [] },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Residence", ResidenceSchema);
