const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: [true, "La descripción es obligatoria."],
        trim: true
    },
    fecha : {
        type: Date,
        default: Date.now
    },
    // relacion con user, tag, img...
    // bonus: seguidores: {[]}, mutuals: {[]}
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User obligatorio."],
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostImage", // Image (?)
    },
    
    //relacion NN
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag",
        },
    ]
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;