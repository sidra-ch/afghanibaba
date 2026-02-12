const express = require("express");
const mongoose = require("mongoose");

const Insurance = require("../models/Insurance");

const router = express.Router();

const getPaging = (req) => {
  const limit = Math.min(Number(req.query.limit) || 20, 100);
  const skip = Math.max(Number(req.query.skip) || 0, 0);
  return { limit, skip };
};

router.get("/", async (req, res) => {
  try {
    const filters = {};
    if (req.query.provider) filters.provider = String(req.query.provider).trim();
    if (req.query.isActive) filters.isActive = req.query.isActive === "true";

    const { limit, skip } = getPaging(req);
    const items = await Insurance.find(filters)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_INSURANCE" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Insurance.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_INSURANCE" });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await Insurance.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_CREATE_INSURANCE" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Insurance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ item });
  } catch (error) {
    res.status(400).json({ error: "FAILED_TO_UPDATE_INSURANCE" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "INVALID_ID" });
    }

    const item = await Insurance.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_DELETE_INSURANCE" });
  }
});

module.exports = router;
