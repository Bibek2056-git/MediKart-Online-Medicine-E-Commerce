import authService from '../services/Authservices.js';
import { createJWT } from "../utils/jwt.js";

const login = async (req, res) => {
  const input = req.body;

  try {
    if (!input) {
      return res.status(400).send("Required data are missing.");
    }

    if (!input.email) {
      return res.status(400).send("Email is required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    const data = await authService.login(input);

    const authToken = createJWT(data);

    res.cookie("authToken", authToken, { maxAge: 86400 * 1000 });

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;

  // Debug: log the input
  console.log("Register input:", input);

  try {
    if (!input || typeof input !== "object") {
      return res.status(400).send("Input data is missing or invalid.");
    }
    if (!input.password) {
      return res.status(400).send("Password is required.");
    }
    if (!input.confirmPassword) {
      return res.status(400).send("Confirm password is required.");
    }
    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }
    const data = await authService.register(input);
    const authToken = createJWT(data);
    res.cookie("authToken", authToken, { maxAge: 86400 * 1000 });
    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const forgotPassword = async (req, res) => {
  const input = req.body;

  try {
    if (!input.email) {
      return res.status(400).send("Email address is required.");
    }

    const data = await authService.forgotPassword(input.email);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const resetPassword = async (req, res) => {
  const input = req.body;
  const query = req.query;

  // Accept both userId and useId for robustness, and trim values
  const userId = (query.userId || query.useId || "").trim();
  const token = (query.token || "").trim();

  try {
    if (!token || !userId) {
      return res.status(400).send("Token and user ID are required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm password is required.");
    }

    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const data = await authService.resetPassword(
      userId,
      token,
      input.password
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("authToken");

  res.json({ message: "Logout successful" });
};

export default { register, login, forgotPassword, resetPassword, logout };
