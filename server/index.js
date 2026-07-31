import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connetDB from "./config/db.js";

import userRoute from "./routes/userRoutes.js";

// Load environment variables
dotenv.config({});

// call database connection
connetDB();

const app = express();
const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// APIs
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
