const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: [true, "La descripción es obligatoria."],
        trim: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User obligatorio."],
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag"
        }
    ]
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;