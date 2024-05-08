// const express = require("express");
import express from "express";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
const app = express();

import authRoutes from "./routes/authRoutes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });
