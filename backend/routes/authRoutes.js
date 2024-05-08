import express from "express";
import { signin, login, logout } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signin);

router.post("/login", login);

router.post("/logout", logout);

export default router;
