const express = require("express");
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')
const validarImage = require('../middlewares/validarImage')
const {
    obtenerImagenes,
    obtenerImagenPorId,
    crearImagen,
    eliminarImagen,
    actualizarImagen
} = require('../controllers/image.controller')

router.get('/',obtenerImagenes);
router.get('/:id',validateObjectId ,obtenerImagenPorId); // verifico el id sea correcto
router.post('/',validarImage,crearImagen); // schema
router.put('/:id',validateObjectId,validarImage,actualizarImagen); // verifico id y valido shcema
router.delete('/:id',validateObjectId,eliminarImagen); // verifico id

module.exports = router;

/*
    ESTO TODAVIA NO LO PROBE !!!!!!!!!!!!!
*/