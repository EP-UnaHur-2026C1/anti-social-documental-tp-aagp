const Image = require('../models/image');

const obtenerImagenes = async (req, res) => {
    try {
        const imagenes = await Image.find().populate("postId")
        res.status(200).json(imagenes)
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las imagenes",
            error: error.message
        });
    }
}

const obtenerImagenPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const imagen = await Image.findById(id).populate("postId")
        if (!imagen) {
            res.status(404).json({ message: "La imagen no fue encontrada" })
        }
        res.status(200).json(imagen)
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la imagen",
            error: error.message
        });
    }
}

const crearImagen = async (req, res) => {
    try {
        const nuevaImagen = await Image.create(req.body)
        res.status(201).json(nuevaImagen) // muestro imagen
    } catch (error) {
        res.status(500).json({
            message: "Error al crear la imagen",
            error: error.message
        });
    }
}

const actualizarImagen = async (req, res) => {
    try {
        const { id } = req.params;
        const { url } = req.body;
        const imagen = await Image.findByIdAndUpdate(id, { url }, {
            new: true,
            runValidators: true,
        })
        res.status(200).json(imagen) // muestro imagen
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar la imagen",
            error: error.message
        });
    }
}

const eliminarImagen = async (req, res) => {
    try {
        const { id } = req.params;
        const imagenEliminada = await Image.findByIdAndDelete(id)
        res.status(200).json({ message: "Imagen eliminada con exito" })
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar la imagen",
            error: error.message
        });
    }
}

module.exports = {
    crearImagen,
    obtenerImagenPorId,
    obtenerImagenes,
    eliminarImagen,
    actualizarImagen
}