import mongoose, { Model, mongo, Schema } from "mongoose";
import { UserModel } from "./user.model";
const userGameSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: U
            required: true,
            unique: true,
        },
        games_id: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
    },
);

export const UserGamesModel = mongoose.model("UserGame", userGameSchema);