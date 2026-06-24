const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "El contenido es obligatorio"],
            trim: true,
            minlength: [1, "El comentario no puede estar vacío"],
            maxlength: [500, "El comentario no puede superar los 500 caracteres"]
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
            index: true,
        },
    }, {
    timestamps: true,
},
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;