import mongoose, { Model, mongo, Schema } from "mongoose";

const userGameSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        games_id: {
            type: Schema.Types.ObjectId,
            ref: "Games",
            required: true,
            unique: true,
        },
    },
);

export const UserGamesModel = mongoose.model("UserGame", userGameSchema);