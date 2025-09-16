import { use } from "react";
import { UserGamesModel } from "../models/userGame.model.js";

export const createUserGame = async (req, res) => {
    const { user_id, game_id  } = req.body
    try {
        const crearUserGame = await UserGamesModel.create({user_id, games_id});
        return res.status(201).json({msg: "Se creo el userGame correctamente", data: crearUserGame});
    } catch (error) {
        console.log("no se pudo crear el userGame");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllUserGame = async (req, res) => {
    try {
        const obtenerUserGame = await UserGamesModel.find();
        return res.status(201).json({msg: "Se obtuvo todos los userGame", data: obtenerUserGame});
    } catch (error) {
        console.log("No se pudo obtener todos los userGame");
        return res.status(500).json({msg: "Error por parte del servidor", error})
    }
};

export const getByIdUserGame = async (req, res) => {
    const {id} = req.params
    try {
        const obtenerIdUserGame = await UserGamesModel.findById(id)
        return res.status(200).json({msg: "Se obtuvieron los usuarios por id", data: obtenerIdUserGame});
    } catch (error) {
        console.log("No se pudieron obtener los userGame por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateUserGame = async (req, res) => {
    const {id} = req.params;
    const { user_id, game_id  } = req.body
    try {
        const actualizarUserGame = await UserGamesModel.findByIdAndUpdate(id, {
            user_id,
            game_id,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el userGame", data: actualizarUserGame});
    } catch (error) {
        console.log("No se pudo actualizar el userGame", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteUserGame = async (req, res) => {
    const {id} = req.params;
    const { user_id, game_id  } = req.body
    try {
        const deleteUserGame = await UserGamesModel.findByIdAndDelete(id, {
            user_id,
            game_id,
        }, {
            new: true,
        });

        return res.status(200).json({msg: "Se elimino el userGame", data: deleteUserGame});
    } catch (error) {
        console.log("No se pudo eliminar el userGame");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};