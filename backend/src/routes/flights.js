const express = require("express");
const mongoose = require("mongoose");

const Flight = require("../models/Flight");

const router = express.Router();

const getPaging = (req) => {
  const limit = Math.min(Number(req.query.limit) || 20, 100);
  const skip = Math.max(Number(req.query.skip) || 0, 0);
  return { limit, skip };
};

router.get("/", async (req, res) => {
  try {
    const filters = {};
    if (req.query.origin) filters.origin = String(req.query.origin).trim();
    if (req.query.destination) filters.destination = String(req.query.destination).trim();
    if (req.query.airline) filters.airline = String(req.query.airline).trim();
    if (req.query.isActive) filters.isActive = req.query.isActive === "true";

    const { limit, skip } = getPaging(req);
    const items = await Flight.find(filters)
      .sort({ departureTime: 1 })
      .skip(skip)
      .limit(limit);

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_FLIGHTS" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Flight.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_FLIGHT" });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await Flight.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_CREATE_FLIGHT" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_UPDATE_FLIGHT" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Flight.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_DELETE_FLIGHT" });
  }
});

module.exports = router;
