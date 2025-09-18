import mongoose, { Model, Schema } from "mongoose";

const profileSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
        },
        edad: {
            type: Number,
            required: true,
            unique: true,
        },
        pais: {
            type: String,
            required: false,
            unique: false,
        },
        description: {
            type: String,
            required: false,
            unique: false,
        }, 
        //aca estamos relacionando 1 a 1
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true,
        },
    },
);

export const ProfileModel = mongoose.model("Profile", profileSchema);