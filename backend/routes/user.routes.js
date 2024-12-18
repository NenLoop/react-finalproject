import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserProfile, updateUser } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/profile/:username", protectRoute, getUserProfile);
route.post("/update", protectRoute, updateUser)

export default route;