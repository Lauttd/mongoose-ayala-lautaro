import { get } from "mongoose";
import { createTag, getAllTag, getByIdTag, updateTag, deleteTag } from "../controllers/tag.controller.js";
import { Router } from "express";

export const tagRouter = Router();

tagRouter.post("/tag", createTag);
tagRouter.get("/tag", getAllTag);
tagRouter.get("/tag/:id", getByIdTag);
tagRouter.put("/tag/:id", updateTag);
tagRouter.delete("/tag/:id", deleteTag);