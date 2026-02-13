const express = require("express");
const mongoose = require("mongoose");

const Bus = require("../models/Bus");

const router = express.Router();

const getPaging = (req) => {
  const limit = Math.min(Number(req.query.limit) || 20, 100);
  const skip = Math.max(Number(req.query.skip) || 0, 0);
  return { limit, skip };
};

const listBuses = async (req, res) => {
  try {
    const filters = {};
    const origin = req.query.origin || req.query.from;
    const destination = req.query.destination || req.query.to;
    if (origin) filters.origin = String(origin).trim();
    if (destination) filters.destination = String(destination).trim();
    if (req.query.company) filters.company = String(req.query.company).trim();
    if (req.query.vendorId) filters.vendorId = String(req.query.vendorId).trim();
    if (req.query.isActive) filters.isActive = req.query.isActive === "true";

    if (req.query.date) {
      const date = new Date(String(req.query.date));
      if (!Number.isNaN(date.getTime())) {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        const end = new Date(date);
        end.setHours(23, 59, 59, 999);
        filters.departureTime = { $gte: start, $lte: end };
      }
    }

    const { limit, skip } = getPaging(req);
    const items = await Bus.find(filters)
      .sort({ departureTime: 1 })
      .skip(skip)
      .limit(limit);

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_BUSES" });
  }
};

router.get("/", listBuses);
router.get("/search", listBuses);

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Bus.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_BUS" });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await Bus.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_CREATE_BUS" });
  }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Bus.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_DELETE_BUS" });
  }
});

module.exports = router;
