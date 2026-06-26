const { Post } = require('../models');
const { redisClient } = require('../config/redis');

const validarPostId = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const claveCache = `posts:${id}`
        const postEnCache = await redisClient.get(claveCache)
        if(postEnCache) {
            req.post = JSON.parse(postEnCache);
            req.origen = "Redis"; 
            return next();
        }

        const post = await Post.findById(id)
            .populate("user", "nickname")
            .populate("tags", "nombre")
            .select("-createdAt -updatedAt -__v");
        if(!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        await redisClient.set(claveCache, JSON.stringify(post), { EX: 1200 });
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