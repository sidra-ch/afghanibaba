const express = require("express");
const mongoose = require("mongoose");

const Bus = require("../models/Bus");
const Booking = require("../models/Booking");

const router = express.Router();

const getDateRange = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return { start, end };
};

router.post("/bus", async (req, res) => {
  try {
    const payload = { ...req.body };
    if (payload.vendorId && !mongoose.Types.ObjectId.isValid(payload.vendorId)) {
      return res.status(400).json({ error: "INVALID_VENDOR_ID" });
    }

    if (payload.seats && !payload.seatsAvailable) {
      payload.seatsAvailable = payload.seats;
    }

    const item = await Bus.create(payload);
    res.status(201).json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_CREATE_BUS" });
  }
});

router.put("/bus/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_UPDATE_BUS" });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const vendorId = req.query.vendorId;
    if (!vendorId || !mongoose.Types.ObjectId.isValid(vendorId)) {
      return res.status(400).json({ error: "INVALID_VENDOR_ID" });
    }

    const busFilters = { vendorId };
    if (req.query.origin) busFilters.origin = String(req.query.origin).trim();
    if (req.query.destination) busFilters.destination = String(req.query.destination).trim();

    const buses = await Bus.find(busFilters).select("_id");
    const busIds = buses.map((bus) => bus._id);

    const bookingFilters = { busId: { $in: busIds } };
    if (req.query.paymentStatus) bookingFilters.paymentStatus = String(req.query.paymentStatus);
    if (req.query.date) {
      const range = getDateRange(String(req.query.date));
      if (range) bookingFilters.bookingDate = { $gte: range.start, $lte: range.end };
    }

    const items = await Booking.find(bookingFilters).populate("busId");
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_BOOKINGS" });
  }
});

router.get("/revenue", async (req, res) => {
  try {
    const vendorId = req.query.vendorId;
    if (!vendorId || !mongoose.Types.ObjectId.isValid(vendorId)) {
      return res.status(400).json({ error: "INVALID_VENDOR_ID" });
    }

    const buses = await Bus.find({ vendorId }).select("_id origin destination");
    const busIds = buses.map((bus) => bus._id);

    const bookingFilters = { busId: { $in: busIds }, paymentStatus: "paid" };
    if (req.query.date) {
      const range = getDateRange(String(req.query.date));
      if (range) bookingFilters.bookingDate = { $gte: range.start, $lte: range.end };
    }

    const bookings = await Booking.find(bookingFilters).populate("busId");

    const routeStats = {};
    bookings.forEach((booking) => {
      const bus = booking.busId;
      if (!bus) return;
      const key = `${bus.origin}→${bus.destination}`;
      if (!routeStats[key]) {
        routeStats[key] = { route: key, busesToday: 0, seatsSold: 0, revenue: 0 };
      }
      routeStats[key].seatsSold += booking.seats.length;
      routeStats[key].revenue += booking.totalPrice;
    });

    buses.forEach((bus) => {
      const key = `${bus.origin}→${bus.destination}`;
      if (!routeStats[key]) {
        routeStats[key] = { route: key, busesToday: 0, seatsSold: 0, revenue: 0 };
      }
      routeStats[key].busesToday += 1;
    });

    res.json({ items: Object.values(routeStats) });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_REVENUE" });
  }
});

module.exports = router;
