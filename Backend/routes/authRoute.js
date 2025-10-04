import express from "express";
import Authservices from "../src/services/Authservices.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const user = await Authservices.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await Authservices.login(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

// Forgot Password
router.post("/forgot-password", async (req, res) => {
  try {
    const result = await Authservices.forgotPassword(req.body.email);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  try {
    const { userId, token, newPassword } = req.body;
    const result = await Authservices.resetPassword(userId, token, newPassword);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
});

export default router;
