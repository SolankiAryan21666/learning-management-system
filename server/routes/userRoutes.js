import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Public authentication routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// Protected user routes
router.route("/profile").get(isAuthenticated, getUserProfile);

export default router;
