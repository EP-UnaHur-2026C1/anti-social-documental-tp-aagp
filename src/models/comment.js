const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "El contenido es obligatorio"],
            trim: true,
        },
        visible: {
            type: Boolean,
            default: true,
        },
        /*userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },*/
    }, {
        timestamps: true,
    },
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;