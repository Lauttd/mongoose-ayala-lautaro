import { createGames, getAllGame, getByIdGames, updateGames, deleteGames } from "../controllers/games.controller.js";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/user", createGames);
userRouter.get("/user", getAllGame);
userRouter.get("/user/:id", getByIdGames);
userRouter.put("/user/:id", updateGames);
userRouter.delete("/user/:id", deleteGames);