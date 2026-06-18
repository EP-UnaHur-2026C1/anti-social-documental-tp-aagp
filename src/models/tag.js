const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true,"El nombre es obligatorio"],
        trim:true
    }
},{
    timestamps: true
})
const Tag = mongoose.model("Tag",tagSchema);
module.exports = Tag;

// me falta swagger de los demas

