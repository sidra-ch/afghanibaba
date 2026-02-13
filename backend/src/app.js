const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/auth");
const { authMiddleware, requireRole } = require("./middleware/auth");
const healthRouter = require("./routes/health");
const homeRouter = require("./routes/home");
const flightsRouter = require("./routes/flights");
const busesRouter = require("./routes/buses");
const hotelsRouter = require("./routes/hotels");
const residencesRouter = require("./routes/residences");
const toursRouter = require("./routes/tours");
const insuranceRouter = require("./routes/insurance");
const bookingRouter = require("./routes/booking");
const paymentRouter = require("./routes/payment");
const vendorRouter = require("./routes/vendor");
const adminRouter = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    name: "afghanibaba-api",
    status: "ok",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/health", healthRouter);
app.use("/api/home", homeRouter);
app.use("/api/flights", flightsRouter);
app.use("/api/buses", busesRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/residences", residencesRouter);
app.use("/api/tours", toursRouter);
app.use("/api/insurance", insuranceRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/vendor", authMiddleware, requireRole(["vendor", "admin"]), vendorRouter);
app.use("/api/admin", authMiddleware, requireRole(["admin"]), adminRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    path: req.originalUrl,
  });
});

module.exports = app;
