import mongoose, { Model, Schema } from "mongoose";

const GamesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: false,
        },
        categoria: {
            type: String,
            required: true,
            unique: false,     
        },
        genero: {
            type: String,
            required: true,
            unique: false,
        },
        multiplayer: {
            type: String,
            required: true,
            unique: false,
        }
    }
);

export const GamesModel = mongoose.model("Games", GamesSchema);