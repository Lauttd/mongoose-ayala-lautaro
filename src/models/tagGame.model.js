import mongoose, { Model, mongo, Schema } from "mongoose";

//Relacion muchos a muchos con tag y games
const TagGameSchema = new Schema(
    {
        tag_id: {
            type: Schema.Types.ObjectId,
            ref: "Tag",
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

export const TagGamesModel = mongoose.model("TagGame", TagGameSchema);