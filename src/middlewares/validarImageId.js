const Image = require("../models/image");

const validarImagenId = async(req,res,next) =>{
    try {
        const {id} = req.params;
        const imagen = await Image.findById(id);

        // verifico si la imagen no existe
        if(!imagen){
            return res.status(404).json({
                message: "La imagen no fue encontrada"
            })
        }
        req.imagen = imagen;
        next()
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar la imagen",
            error: error.message
        })
    }
}
module.exports = validarImagenId;