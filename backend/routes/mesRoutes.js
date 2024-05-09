import express from "express";
import { messageSent } from "../controllers/messageController.js";
import { protectRoute } from "../middleware/protectRout.js";

const router = express.Router();

router.post("/send/:id", protectRoute, messageSent);

export default router;
