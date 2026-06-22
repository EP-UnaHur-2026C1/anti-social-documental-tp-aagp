const Post = require("../models/post");

const validarExistenciaPost = async (req, res, next) => {
    try {
        // const id = req.body.postId;
        const { postId } = req.body;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                error: "Post no encontrado"
            });
        }
        req.post = post;
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error al validar el post",
            error: error.message
        });
    }
};

module.exports = validarExistenciaPost;

