import { Router } from "express";

const authRouter = Router();

// Sign Up Route
authRouter.post('/sign-up', (req, res) => {
  res.send({ title: "Sign Up" });
});

// Sign In Route
authRouter.post('/sign-in', (req, res) => {
  res.send({ title: "Sign In" });
});

// Sign Out Route
authRouter.post('/sign-out', (req, res) => {
  res.send({ title: "Sign Out" });
});

export default authRouter;
