import { createProfile, getAllPerfil, getByIdPerfil, updateProfile, deleteProfile } from "../controllers/profile.controller.js";
import { Router } from "express";

export const profileRouter = Router();

profileRouter.post("/profile", createProfile);
profileRouter.get("/profile", getAllPerfil);
profileRouter.get("/profile/:id", getByIdPerfil);
profileRouter.put("/profile/:id", updateProfile);
profileRouter.delete("/profile/:id", deleteProfile);