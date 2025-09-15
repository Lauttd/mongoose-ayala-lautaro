import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const crearUsuario = await UserModel.create({username, email, password});
        return res.status(201).json({msg: "Se creo el usuario correctamente", data: crearUsuario});
    } catch (error) {
        console.log("no se pudo crear el usuaerio");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllUser = async (req, res) => {
    try {
        const obtenerUsers = await UserModel.find();
        return res.status(201).json({msg: "Se obtuvo todos los usuarios", data: obtenerUsers});
    } catch (error) {
        console.log("No se pudo obtener todos los usuarios");
        return res.status(500).json({msg: "Error por parte del servidor", error})
    }
};

export const getByIdUser = async (req, res) => {
    const {id} = req.params
    try {
        const obtenerIdUser = await UserModel.findById(id)
        return res.status(200).json({msg: "Se obtuvieron los usuarios por id", data: obtenerIdUser});
    } catch (error) {
        console.log("No se pudieron obtener los usuarios por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {username, email, password} = req.body;
    try {
        const actualizarUser = await UserModel.findByIdAndUpdate(id, {
            username,
            email,
            password,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el usuario", data: actualizarUser});
    } catch (error) {
        console.log("No se pudo actualizar el usuario", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    const {username, email, password} = req.body;
    try {
        const deleteUsuario = await UserModel.findByIdAndDelete(id, {
            username,
            email,
            password,
        }, {
            new: true,
        });

        return res.status(200).json({msg: "Se elimino el usuario", data: deleteUsuario});
    } catch (error) {
        console.log("No se pudo eliminar el usuario");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};