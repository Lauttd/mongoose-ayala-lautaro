import { TagModel } from "../models/tag.model.js";

export const createTag = async (req, res) => {
    const { nombre } = req.body
    try {
        const crearTag = await TagModel.create({nombre});
        return res.status(201).json({msg: "Se creo el tag correctamente", data: crearTag});
    } catch (error) {
        console.log("no se pudo crear el tag");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};

export const getAllTag = async (req, res) => {
    try {
        const obtenerTag = await TagModel.find();
        return res.status(201).json({msg: "Se obtuvo todos los tag", data: obtenerTag});
    } catch (error) {
        console.log("No se pudo obtener todos los tags");
        return res.status(500).json({msg: "Error por parte del servidor", error})
    }
};

export const getByIdTag = async (req, res) => {
    const {id} = req.params
    try {
        const obtenerIdTag = await TagModel.findById(id)
        return res.status(200).json({msg: "Se obtuvieron los tag por id", data: obtenerIdTag});
    } catch (error) {
        console.log("No se pudieron obtener los tag por id");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
}

export const updateTag = async (req, res) => {
    const {id} = req.params;
    const { nombre } = req.body
    try {
        const actualizarTag = await TagModel.findByIdAndUpdate(id, {
            nombre,
        },
            {
                new: true,
            },
        );
            return res.status(200).json({msg: "Se actualizo el tag", data: actualizarTag});
    } catch (error) {
        console.log("No se pudo actualizar el tag", error);
        return res.status(500).json({msg: "Error por parte del servidor", error});      
    }
};

export const deleteTag = async (req, res) => {
    const {id} = req.params;
    const { nombre } = req.body
    try {
        const deleteCategoria = await TagModel.findByIdAndDelete(id, {
            nombre,
        }, {
            new: true,
        });

        return res.status(200).json({msg: "Se elimino el tag", data: deleteCategoria});
    } catch (error) {
        console.log("No se pudo eliminar el tag");
        return res.status(500).json({msg: "Error por parte del servidor", error});
    }
};