const { Post } = require('../models');

const validarPostId = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
            .populate("user", "nickname")
            .populate("tags", "nombre")
            .select("-createdAt -updatedAt -__v");
        if(!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        req.post = post
        next()
    } catch (error) {
        res.status(500).json({
            message: "Error en la validación del Id del Post.",
            error: error.message,
        });
    }
}

module.exports = validarPostId