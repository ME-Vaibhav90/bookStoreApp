import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import cors from 'cors';
import userRoute from './route/user.route.js';
import contactRoute from "./route/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI || "mongodb://localhost:27017/bookStore";

app.use(cors());
app.use(express.json());

// Async IIFE to connect DB
(async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
})();

// Define routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use("/api", contactRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
