import { createTagGame, getAllTagGame, getByIdTagGame, updateTagGame, deleteTagGame } from "../controllers/tagGame.controller.js";
import { Router } from "express";


export const tagGameRouter = Router();

tagGameRouter.post("/tagGame", createTagGame);
tagGameRouter.get("/tagGame", getAllTagGame);
tagGameRouter.get("/tagGame/:id", getByIdTagGame);
tagGameRouter.put("/tagGame/:id", updateTagGame);
tagGameRouter.delete("/tagGame/:id", deleteTagGame);