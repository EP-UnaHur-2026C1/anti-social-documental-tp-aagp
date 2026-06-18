const Comment = require("../models/comment");

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comment.find()
            .populate("userId", "nickname")
            .populate("postId", "texto fecha")
            .select(
                "-createdAt -updatedAt -__v"
            );
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los comentarios",
            error: error.message,
        });
    }
};

const obtenerComentariosPorPost = async (req, res) => {
    try {
        const visibleMonths = Number(process.env.COMMENT_VISIBLE_MONTHS) || 6;
        const fechaLimite = new Date();
        fechaLimite.setMonth(
            fechaLimite.getMonth() - visibleMonths
        );
        const comentarios = await Comment.find({
            postId: /*req.params.postId*/req.post._id,
            visible: true,
            createdAt: {
                $gte: fechaLimite,
            },
        }).populate("userId", "nickname")
          .populate("postId", "texto fecha")
          .select("-createdAt -updatedAt -__v");
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los comentarios del post",
            error: error.message,
        });
    }
};

const obtenerComentario = async (req, res) => {
    res.status(200).json(req.comment);
};

const crearComentario = async (req, res) => {
    try {
        const comentario = await Comment.create(req.body);
        res.status(201).json(comentario);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el comentario",
            error: error.message,
        });
    }
};

const actualizarComentario = async (req, res) => {
    try {
        const comentario = req.comment;
        comentario.content = req.body.content;
        await comentario.save();
        res.status(200).json({
            message: "Comentario actualizado con éxito",
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el comentario",
            error: error.message,
        });
    }
};

const eliminarComentario = async (req, res) => {
    try {
        await req.comment.deleteOne();
        res.status(200).json({
            message: "Comentario eliminado con éxito"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el comentario",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerComentarios,
    obtenerComentario,
    obtenerComentariosPorPost,
    crearComentario,
    actualizarComentario,
    eliminarComentario
};