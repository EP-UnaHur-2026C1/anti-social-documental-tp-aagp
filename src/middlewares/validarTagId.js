const Tag = require("../models/tag");

const validarTagId = async(req,res,next) => {
     try {
        const {id} = req.params;
        const tag = await Tag.findById(id);

        if(!tag){
            return res.status(404).json({
                message: "El tag no fue encontrado"
            })
        }
        req.tag = tag;
        next()
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar el tag",
            error: error.message
        })
    }
}
module.exports = validarTagId