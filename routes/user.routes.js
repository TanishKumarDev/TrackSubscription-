import { Router } from "express";

const userRouter = Router();

// Get all users
userRouter.get('/', (req, res) => {
     console.log("[GET] /api/v1/users hit");
  res.send({ title: "Get all users" });
});

// Get a single user by ID
userRouter.get('/:id', (req, res) => {
  res.send({ title: `Get user details for ID ${req.params.id}` });
});

// Create a new user
userRouter.post('/', (req, res) => {
  res.send({ title: "Create user" });
});

// Update a user by ID
userRouter.put('/:id', (req, res) => {
  res.send({ title: `Update user with ID ${req.params.id}` });
});

// Delete a user by ID
userRouter.delete('/:id', (req, res) => {
  res.send({ title: `Delete user with ID ${req.params.id}` });
});

export default userRouter;
