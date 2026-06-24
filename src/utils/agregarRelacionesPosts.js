const Image = require("../models/image");
const { obtenerComentariosVisibles } = require("./commentsFilter");

const agregarRelacionesPosts = async (posts) => {
    const postsIds = posts.map(post => post._id);

    const comments = await obtenerComentariosVisibles({
        postId: { $in: postsIds }
    });

    const images = await Image.find({
        postId: { $in: postsIds }
    }).select("-createdAt -updatedAt -__v");

    return posts.map(post => {
        const postId = post._id.toString();

        return {
            ...(typeof post.toObject === "function"
                ? post.toObject()
                : post),

            comments: comments.filter(
                c => c.postId.toString() === postId
            ),

            images: images.filter(
                i => i.postId.toString() === postId
            )
        };
    });
};

module.exports = {
    agregarRelacionesPosts
};
