const { Post } = require('../models');
const { redisClient } = require('../config/redis');

const validarPostCache = async (req, res, next) => {
    try {
        const postsEnCache = await redisClient.get("posts")
            if(postsEnCache) {
                req.origen = "redis",
                req.posts = JSON.parse(postsEnCache)
                return next()
            }
        const post = await Post.find()
            .populate("user", "nickname")
            .populate("tags", "nombre")
            .select("-createdAt -updatedAt -__v")
        await redisClient.set("posts", JSON.stringify(post), { EX: 1200 });
        req.posts = post
        next()
    } catch (error) {
        res.status(500).json({
            message: "Error en verificar Posts en Caché.",
            error: error.message,
        });
    }
}

module.exports = validarPostCache;