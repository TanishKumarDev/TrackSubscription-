import { Router } from "express";

const subscriptionRouter = Router();

// GET all subscriptions
subscriptionRouter.get("/", (req, res) => {
  console.log(" [GET] /api/v1/subscriptions hit");
  res.json({ title: "Get all subscriptions" });
});

export default subscriptionRouter;
