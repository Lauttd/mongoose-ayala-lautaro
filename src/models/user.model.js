import mongoose, { Model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
                type: String,
                required: true,
            },
        //Eliminacion logica, No se borra fisicamente de la bd.
        deleted: {
            type: Boolean,
            default: false,
        },
    }
);

export const UserModel = mongoose.model("User", UserSchema);