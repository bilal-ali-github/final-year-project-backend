import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/users.js";

const server = express();

server.use(bodyParser.json({ limit: "30mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.use("/users", authRoutes);

const MONGO_URI = "mongodb://localhost:27017/FYP";
const API_PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(API_PORT, () => {
      console.log(`Server Running on Port: http://localhost:${API_PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect..`);
  });
