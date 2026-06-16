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
    }
    // relacion con user, tag, img...
    // bonus: seguidores: {[]}, mutuals: {[]}
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;