// const express = require("express");
import express from "express";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

import authRoutes from "./routes/authRoutes.js";
import mesRoutes from "./routes/mesRoutes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", mesRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });
