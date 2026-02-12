const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const healthRouter = require("./routes/health");
const homeRouter = require("./routes/home");
const flightsRouter = require("./routes/flights");
const busesRouter = require("./routes/buses");
const hotelsRouter = require("./routes/hotels");
const residencesRouter = require("./routes/residences");
const toursRouter = require("./routes/tours");
const insuranceRouter = require("./routes/insurance");

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

app.use("/api/health", healthRouter);
app.use("/api/home", homeRouter);
app.use("/api/flights", flightsRouter);
app.use("/api/buses", busesRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/residences", residencesRouter);
app.use("/api/tours", toursRouter);
app.use("/api/insurance", insuranceRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    path: req.originalUrl,
  });
});

module.exports = app;
