const { Post, PostImage, Tag } = require('../models');

const obtenerPosts = async (req,res) => {
    try {
        const post = await Post.find()
            .populate("user", "nickName")
            .select("-createdAt -updatedAt -__v")
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener todos los posts.",
            error: error.message,
        });
    }
}

const obtenerPostPorId = async (req,res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
            .populate("user", "nickName")
            .select("-createdAt -updatedAt -__v");
        if(!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el Post.",
            error: error.message,
        });
    }
}

const publicarPost = async (req,res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json({ message: "Se ha publicado el Post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al publicar.",
            error: error.message,
        });
    }
}

const actualizarPost = async (req,res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators:true,
        });
        if(!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar Post.",
            error: error.message,
        });
    }
}

const eliminarPost = async (req,res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if(!deletedPost) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        res.status(200).json({ message: "Este post ha sido eliminado." });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el post.",
            error: error.message,
        });
    }
}

const agregarTagAPost = async (req,res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        post.tags.push(req.body);
        await post.save();
        res.status(201).json({ message: "Tag agregado al Post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al agregar tag al post.",
            error: error.message,
        });
    }
}

const quitarTagAPost = async (req,res) => {
    try {
        const { id, tagId } = req.params;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        post.tags = post.tags.filter(
            (tag) => tag._id.toString() !== tagId,
        );
        await post.save();
        res.status(200).json({ message: "Tag eliminado del post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar tag del post.",
            error: error.message,
        });
    }
}

const agregarTagsAPost = async (req,res) => {
    try {
        const { id } = req.params;
        const { tagsId } = req.body;
        const post = await Post.findByIdAndUpdate(
            id,
            { $addToSet: { tags: tagsId } },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        res.status(201).json({ message: "Tags agregados al Post." });
    } catch (error) {
        res.status(500).json({
            message: "Error al agregar tags al post.",
            error: error.message,
        });
    }
}

const quitarTodosLosTagsAPost = async (req,res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(
            id, 
            { $set: { tags: [] } },
            { new: true },
        );
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado." });
        }
        res.status(200).json({message:"Se quitaron todos los Tags del Post."})
    } catch (error) {
        res.status(500).json({error:"No fue posible quitar todos los Tags del Post."})
    }
}

module.exports = {
    obtenerPosts,
    obtenerPostPorId,
    publicarPost,
    actualizarPost,
    eliminarPost,
    agregarTagAPost,
    quitarTagAPost,
    agregarTagsAPost,
    quitarTodosLosTagsAPost,
}