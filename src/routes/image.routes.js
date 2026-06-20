const express = require("express");
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')
const validarImage = require('../middlewares/validarImage')
const validarPostExista = require("../middlewares/validarExistenciaPost")
const validarImagenId = require("../middlewares/validarImageId")

// para actualizar
const validarImgAct = require("../middlewares/validarImgAct")
const {
    obtenerImagenes,
    obtenerImagenPorId,
    crearImagen,
    eliminarImagen,
    actualizarImagen
} = require('../controllers/image.controller')

router.get('/',obtenerImagenes);
router.get('/:id',validateObjectId,validarImagenId,obtenerImagenPorId); 
router.post('/',validarImage,validarPostExista,crearImagen); 
router.put('/:id',validateObjectId,validarImgAct,validarImagenId,actualizarImagen); 
router.delete('/:id',validateObjectId,validarImagenId,eliminarImagen); 

module.exports = router;
