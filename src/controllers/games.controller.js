import { GamesModel } from "../models/games.model.js";
import { TagGamesModel } from "../models/tagGame.model.js";

export const createGames = async (req, res) => {
    const { nombre, categoria, genero, owner,  multiplayer, premiaciones } = req.body
    try {
        const crearGame = await GamesModel.create({nombre, categoria, genero, owner, multiplayer, premiaciones});
        return res.status(201).json({msg: "Se creo el juego correctamente", data: crearGame});
    } catch (error) {
        console.log("no se pudo crear el juego", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllGame = async (req, res) => {
    try {
        const obtenerGames = await GamesModel.find();
        return res.status(201).json({msg: "Se obtuvo todos los juegos", data: obtenerGames});
    } catch (error) {
        console.log("No se pudo obtener todos los juegos");
        return res.status(500).json({msg: "Error por parte del servidor", error})
    }
};

export const getByIdGames = async (req, res) => {
    const {id} = req.params
    try {
        const obtenerIdGames = await GamesModel.findById(id)
        return res.status(200).json({msg: "Se obtuvieron los juegos por id", data: obtenerIdGames});
    } catch (error) {
        console.log("No se pudieron obtener los juegos por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateGames = async (req, res) => {
    const {id} = req.params;
    const { nombre, categoria, genero, owner,  multiplayer, premiaciones } = req.body
    try {
        const actualizarGames = await GamesModel.findByIdAndUpdate(id, {
            nombre,
            categoria,
            genero,
            owner, 
            multiplayer,
            premiaciones,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el juego", data: actualizarGames});
    } catch (error) {
        console.log("No se pudo actualizar el juego");
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteGames = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteGames = await GamesModel.findByIdAndDelete(id)

        //Eliminacion en cascada de la relacion games y tagGame
        await TagGamesModel.findOneAndDelete({games_id: deleteGames._id});

        return res.status(200).json({msg: "Se elimino el juego", data: deleteGames});
    } catch (error) {
        console.log("No se pudo eliminar el juego");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};
