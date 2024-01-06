import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUser,
  getUserById,
  updateUserById,
} from "../controller/admpanelcontroller.js";
export const admpanelRouter = express.Router();

admpanelRouter.get("/users", getAllUser);

admpanelRouter.get("/users/:id", getUserById);

admpanelRouter.post("/users", createUser);

admpanelRouter.put("/users/:id", updateUserById);

admpanelRouter.delete("/users/:id", deleteUserById);
