const Tag = require("../models/tag")

const obtenerTags = async (req, res) => {
    try {
        const tags = await Tag.find().select("-createdAt -updatedAt -__v")
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los tags"
        })
    }
}

const obtenerTagPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const tag = await Tag.findById(id).select("-createdAt -updatedAt -__v")
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el tag",
            error: error.message
        });
    }
}

const crearTag = async (req, res) => {
    try {
        const nuevoTag = await Tag.create(req.body)
        res.status(201).json(nuevoTag) // muestro tag
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el tag",
            error: error.message
        });
    }
}

const actualizarTag = async (req, res) => {
    try {
        const { id } = req.params;
        const tag = await Tag.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el tag"
        })
    }
}

const eliminarTag = async (req, res) => {
    try {
        const { id } = req.params;
        const tagEliminado = await Tag.findByIdAndDelete(id)
        res.status(200).json({ message: "Tag eliminado con exito" })
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el tag"
        })
    }
}

module.exports = {
    obtenerTagPorId,
    obtenerTags,
    crearTag,
    actualizarTag,
    eliminarTag
}