import mongoose, { Model, Schema} from "mongoose";

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
            type: Boolean,
            required: true,
            unique: false,
        },
        //Relacion uno a muchos con user 
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        //documento embebido 
        premiaciones: {
            premio: {
                type: String,
                required: false,
            },
            año: {
                type: Number,
                required: true,
            },
        },
        
    },
);

export const GamesModel = mongoose.model("Games", GamesSchema);