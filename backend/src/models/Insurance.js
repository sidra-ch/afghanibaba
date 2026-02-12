const mongoose = require("mongoose");

const InsuranceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    provider: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "USD" },
    coverage: { type: String, default: "" },
    durationDays: { type: Number, default: 1, min: 1 },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Insurance", InsuranceSchema);
