const mongoose = require('mongoose');
/*
    Tag ---> belongs to many ---> post
    atributos
        - nombre
*/
const tagSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true,"El nombre es obligatorio"],
        trim:true
    }
    /*
        LA REFERENCIA DEBE DE IR EN POST DE ESTA FORMA:
        tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
    */
},{
    timestamps: true
})
const Tag = mongoose.model("Tag",tagSchema);
module.exports = Tag;


