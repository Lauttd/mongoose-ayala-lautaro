import { createUserGame, getAllUserGame, getByIdUserGame, updateUserGame, deleteUserGame } from "../controllers/userGame.controller.js";
import { Router } from "express";


export const userRouter = Router();

userRouter.post("/user", createUserGame);
userRouter.get("/user", getAllUserGame);
userRouter.get("/user/:id", getByIdUserGame);
userRouter.put("/user/:id", updateUserGame);
userRouter.delete("/user/:id", deleteUserGame);