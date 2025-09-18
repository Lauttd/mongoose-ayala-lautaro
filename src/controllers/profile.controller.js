import { ProfileModel } from "../models/profile.model.js";


export const createProfile = async (req, res) => {
    const { name, edad, pais, description, user } = req.body
    try {
        const crearPerfil = await ProfileModel.create({name, edad, pais, description, user});
        return res.status(201).json({msg: "Se creo el perfil correctamente", data: crearPerfil});
    } catch (error) {
        console.log("no se pudo crear el perfil:", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllPerfil = async (req, res) => {
    try {
        const obtenerPerfiles = await ProfileModel.find().populate("user", "username email");
        return res.status(201).json({msg: "Se obtuvo todos los perfiles", data: obtenerPerfiles});
    } catch (error) {
        console.log("No se pudo obtener todos los perfiles");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

//Utilizo el populate para traer tambien los datos del usuario.
export const getByIdPerfil = async (req, res) => {
    const {id} = req.params
    try {
        //Reemplaza el id por el valor del documento al que hace referencia.
        const obtenerIdPerfil = await ProfileModel.findById(id).populate("user", "username email")
        return res.status(200).json({msg: "Se obtuvieron los usuarios por id", data: obtenerIdPerfil});
    } catch (error) {
        console.log("No se pudieron obtener los perfiles por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateProfile = async (req, res) => {
    const {id} = req.params;
    const { name, edad, pais, description } = req.body
    try {
        const actualizarPerfil = await ProfileModel.findByIdAndUpdate(id, {
            name,
            edad,
            pais,
            description,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el perfil", data: actualizarPerfil});
    } catch (error) {
        console.log("No se pudo actualizar el perfil");
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteProfile = async (req, res) => {
    const {id} = req.params;
    const { name, edad, pais, description } = req.body
    try {
        const deletePerfil = await ProfileModel.findByAndDelete(id, {
            name,
            edad,
            pais,
            description,
        }, {
            new: true,
        });

        return res.status(200).json({msg: "Se elimino el perfil", data: deletePerfil});
    } catch (error) {
        console.log("No se pudo eliminar el perfil");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};