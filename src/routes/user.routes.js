
import { createUser, getAllUser, getByIdUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/user", createUser);
userRouter.get("/user", getAllUser);
userRouter.get("/user/:id", getByIdUser);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);