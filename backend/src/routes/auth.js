const express = require("express");
const User = require("../models/User");
const { generateToken } = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "MISSING_FIELDS" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "EMAIL_ALREADY_EXISTS" });
    }

    const userRole = role && ["admin", "vendor", "user"].includes(role) ? role : "user";
    const user = await User.create({
      name,
      email,
      password,
      phone,
      role: userRole,
    });

    const token = generateToken(user);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "REGISTRATION_FAILED" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "MISSING_FIELDS" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "USER_NOT_FOUND" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "INVALID_PASSWORD" });
    }

    if (!user.isActive) {
      return res.status(403).json({ error: "USER_SUSPENDED" });
    }

    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "LOGIN_FAILED" });
  }
});

router.get("/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "NO_TOKEN" });
    }

    const token = authHeader.split(" ")[1];
    const jwt = require("jsonwebtoken");
    const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_in_production";
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: "USER_NOT_FOUND" });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(401).json({ error: "INVALID_TOKEN" });
  }
});

module.exports = router;
