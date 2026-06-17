const Comment = require("../models/comment");

const validarComentarioId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comentario = await Comment.findById(id)
            //.populate("userId", "nickname")
            //.populate("postId", "description")
            .select(
                "-createdAt -updatedAt -__v"
            );
        if (!comentario) {
            return res.status(404).json({
                message: "Comentario no encontrado",
            });
        }
        req.comment = comentario;
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el comentario",
            error: error.message,
        });
    };
};

module.exports = validarComentarioId;