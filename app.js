import express from "express";
import { PORT, NODE_ENV } from "./config/envConfig.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from './database/connectToDatabase.js';

await connectToDatabase();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount versioned API routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

// Root route
app.get("/", (req, res) => {
  res.send(`Hello from TrackSub API in ${NODE_ENV} mode`);
});

// Optional: 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT || 3000, () => {
  console.log(`Server running at http://localhost:${PORT || 3000} in ${NODE_ENV} mode`);
});
