import { createGames, getAllGame, getByIdGames, updateGames, deleteGames } from "../controllers/games.controller.js";
import { Router } from "express";

export const gamesRouter = Router();

gamesRouter.post("/games", createGames);
gamesRouter.get("/games", getAllGame);
gamesRouter.get("/games/:id", getByIdGames);
gamesRouter.put("/games/:id", updateGames);
gamesRouter.delete("/games/:id", deleteGames);