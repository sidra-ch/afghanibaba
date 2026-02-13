const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    amount: { type: Number, required: true, min: 0 },
    method: { type: String, default: "online" },
    status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    providerRef: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
