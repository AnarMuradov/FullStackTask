import express from "express";
import { handleLoginController, handleRegisterController } from "../controller/authController.js";
export const authRouter = express.Router();

authRouter.post("/login",handleLoginController)

authRouter.post("/register",handleRegisterController)