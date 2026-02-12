const express = require("express");
const mongoose = require("mongoose");

const Flight = require("../models/Flight");
const Bus = require("../models/Bus");
const Hotel = require("../models/Hotel");
const Residence = require("../models/Residence");
const Tour = require("../models/Tour");
const Insurance = require("../models/Insurance");

const router = express.Router();

router.get("/", async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.json({
      connected: false,
      counts: {
        flights: 0,
        buses: 0,
        hotels: 0,
        residences: 0,
        tours: 0,
        insurance: 0,
      },
      latest: {
        flights: [],
        buses: [],
        hotels: [],
        residences: [],
        tours: [],
        insurance: [],
      },
    });
  }

  try {
    const limit = Math.min(Number(req.query.limit) || 4, 10);
    const [
      flightCount,
      busCount,
      hotelCount,
      residenceCount,
      tourCount,
      insuranceCount,
      flights,
      buses,
      hotels,
      residences,
      tours,
      insurance,
    ] = await Promise.all([
      Flight.countDocuments(),
      Bus.countDocuments(),
      Hotel.countDocuments(),
      Residence.countDocuments(),
      Tour.countDocuments(),
      Insurance.countDocuments(),
      Flight.find({}).sort({ createdAt: -1 }).limit(limit),
      Bus.find({}).sort({ createdAt: -1 }).limit(limit),
      Hotel.find({}).sort({ createdAt: -1 }).limit(limit),
      Residence.find({}).sort({ createdAt: -1 }).limit(limit),
      Tour.find({}).sort({ createdAt: -1 }).limit(limit),
      Insurance.find({}).sort({ createdAt: -1 }).limit(limit),
    ]);

    res.json({
      connected: true,
      counts: {
        flights: flightCount,
        buses: busCount,
        hotels: hotelCount,
        residences: residenceCount,
        tours: tourCount,
        insurance: insuranceCount,
      },
      latest: {
        flights,
        buses,
        hotels,
        residences,
        tours,
        insurance,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LOAD_HOME" });
  }
});

module.exports = router;
