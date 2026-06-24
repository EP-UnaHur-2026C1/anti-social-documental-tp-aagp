const { Post, Tag } = require('../models');
const { redisClient } = require('../config/redis');
const { agregarRelacionesPosts } = require("../utils/agregarRelacionesPosts");

const obtenerPosts = async (req, res) => {
    try {
        const postsConRelaciones = await agregarRelacionesPosts(req.posts);
        res.status(200).json({
            origen: req.origen,
            posts: postsConRelaciones
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener posts.",
            error: error.message
        });
    }
}

const obtenerPostPorId = async (req, res) => {
    try {
        const [postConRelaciones] = await agregarRelacionesAPosts([req.post]);
        res.status(200).json({
            origen: req.origen,
            post: postConRelaciones
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el post.",
            error: error.message
        });
    }
}

const publicarPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        await redisClient.del("posts");
        res.status(201).json({ message: "Se ha publicado el Post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al publicar.",
            error: error.message,
        });
    }
}

const actualizarPost = async (req, res) => {
    try {
        const post = req.post;
        await Post.updateOne(
            { _id: post._id },
            { $set: req.body }
        );
        await redisClient.del("posts");
        const claveCache = `posts:${post._id}`;
        await redisClient.del(claveCache);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar post.",
            error: error.message,
        });
    }
}

const eliminarPost = async (req, res) => {
    try {
        const post = req.post;
        await Post.deleteOne(
            { _id: post._id }
        );
        await redisClient.del("posts");
        const claveCache = `posts:${post._id}`;
        await redisClient.del(claveCache);
        res.status(200).json({ message: "Este post ha sido eliminado." });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el post.",
            error: error.message,
        });
    }
}

// Tags con redis agregado
const quitarTagAPost = async (req, res) => {
    try {
        const post = req.post
        const tag = req.tag
        await Post.updateOne(
            { _id: post._id },
            { $pull: { tags: tag._id } }
        );
        await redisClient.del("posts");
        const claveCache = `posts:${post._id}`;
        await redisClient.del(claveCache);
        res.status(200).json({ message: "Tag eliminado del post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar tag del post.",
            error: error.message,
        });
    }
}

const agregarTagsAPost = async (req, res) => {
    try {
        const post = req.post
        const { tags } = req.body;
        await Post.updateOne(
            { _id: post._id },
            { $addToSet: { tags: { $each: tags } } }
        );
        await redisClient.del("posts");
        const claveCache = `posts:${post._id}`;
        await redisClient.del(claveCache);
        res.status(201).json({ message: "Tags agregados al Post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al agregar tags al post.",
            error: error.message,
        });
    }
}

const quitarTodosLosTagsAPost = async (req, res) => {
    try {
        const post = req.post
        await Post.updateOne(
            { _id: post._id },
            { $set: { tags: [] } }
        );
        await redisClient.del("posts");
        const claveCache = `posts:${post._id}`;
        await redisClient.del(claveCache);
        res.status(200).json({ message: "Se quitaron todos los Tags del Post." })
    } catch (error) {
        res.status(500).json({ error: "No fue posible quitar todos los Tags del Post." })
    }
}

module.exports = {
    obtenerPosts,
    obtenerPostPorId,
    publicarPost,
    actualizarPost,
    eliminarPost,
    quitarTagAPost,
    agregarTagsAPost,
    quitarTodosLosTagsAPost,
}