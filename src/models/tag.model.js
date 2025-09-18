import mongoose, { Schema, model } from "mongoose";

export const TagSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true,
        },
    },
);

export const TagModel = mongoose.model("Tag", TagSchema);