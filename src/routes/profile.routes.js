import { createProfile, getAllPerfil, getByIdPerfil, updateProfile, deleteProfile } from "../controllers/profile.controller.js";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/user", createProfile);
userRouter.get("/user", getAllPerfil);
userRouter.get("/user/:id", getByIdPerfil);
userRouter.put("/user/:id", updateProfile);
userRouter.delete("/user/:id", deleteProfile);