import { TagGamesModel } from "../models/tagGame.model.js";

export const createTagGame = async (req, res) => {
    const { tag_id, games_id  } = req.body
    try {
        const crearTagGame = await TagGamesModel.create({tag_id, games_id});
        return res.status(201).json({msg: "Se creo el tagGame correctamente", data: crearTagGame});
    } catch (error) {
        console.log("no se pudo crear el tagGame");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllTagGame = async (req, res) => {
    try {
        const obtenerTagGame = await TagGamesModel.find().populate("tag_id", "nombre").populate("games_id", "nombre categoria genero multiplayer premiaciones");;
        return res.status(201).json({msg: "Se obtuvo todos los tagGame", data: obtenerTagGame});
    } catch (error) {
        console.log("No se pudo obtener todos los tagGame", error);
        return res.status(500).json({msg: "Error por parte del servidor", error})
    }
};

export const getByIdTagGame = async (req, res) => {
    const {id} = req.params
    try {
        const obtenerIdTagGame = await TagGamesModel.findById(id).populate("tag", "nombre").populate("Games", "nombre categoria genero multiplayer premiaciones");
        return res.status(200).json({msg: "Se obtuvieron los tagGame por id", data: obtenerIdTagGame});
    } catch (error) {
        console.log("No se pudieron obtener los TagGame por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateTagGame = async (req, res) => {
    const {id} = req.params;
    const { tag_id, games_id  } = req.body
    try {
        const actualizarTagGame = await TagGamesModel.findByIdAndUpdate(id, {
            tag_id,
            games_id,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el userGame", data: actualizarTagGame});
    } catch (error) {
        console.log("No se pudo actualizar el TagGame", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteTagGame = async (req, res) => {
    const {id} = req.params;
    const { tag_id, games_id  } = req.body
    try {
        const deletetagGame = await TagGamesModel.findByIdAndDelete(id, {
            tag_id,
            games_id,
        }, {
            new: true,
        });

        return res.status(200).json({msg: "Se elimino el tagGame", data: deletetagGame});
    } catch (error) {
        console.log("No se pudo eliminar el tagGame");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};