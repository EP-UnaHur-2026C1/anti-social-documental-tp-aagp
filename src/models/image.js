const mongoose = require('mongoose');
/*
    atributos:
        - url.
        - postId (de la relacion belong)
*/
const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        required: [true,"la url debe de ser obligatoria"],
        trim:true
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
},{
    timestamps: true
})
const Image = mongoose.model("Image",imageSchema);
module.exports = Image;
