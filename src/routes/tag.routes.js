const express = require("express")
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')


const{
    obtenerTagPorId,
    obtenerTags,
    crearTag,
    actualizarTag,
    eliminarTag
} = require("../controllers/tag.controller")

router.get('/',obtenerTags);
router.get('/:id',validateObjectId,obtenerTagPorId); // verifico
router.post('/',crearTag); // cuando creo -> verifico el nombre
router.put('/:id',validateObjectId,actualizarTag); // verifico id y nombre
router.delete('/:id',validateObjectId,eliminarTag); // verifico

module.exports = router;

