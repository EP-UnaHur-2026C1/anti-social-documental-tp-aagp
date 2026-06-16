const express = require("express");
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')

const {
    obtenerImagenes,
    obtenerImagenPorId,
    crearImagen,
    eliminarImagen,
    actualizarImagen
} = require('../controllers/image.controller')

router.get('/',obtenerImagenes);
router.get('/:id',validateObjectId ,obtenerImagenPorId); // verifico el id sea correcto
router.post('/',crearImagen);
router.put('/:id',validateObjectId,actualizarImagen); // verifico id
router.delete('/:id',validateObjectId,eliminarImagen); // verifico id

module.exports = router;

/*
    ESTO TODAVIA NO LO PROBE !!!!!!!!!!!!!
*/