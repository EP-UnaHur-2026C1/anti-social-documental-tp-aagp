const express = require("express")
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')
const validarTag = require('../middlewares/validarTag')

const{
    obtenerTagPorId,
    obtenerTags,
    crearTag,
    actualizarTag,
    eliminarTag
} = require("../controllers/tag.controller")

router.get('/',obtenerTags);
router.get('/:id',validateObjectId,obtenerTagPorId); 
router.post('/',validarTag,crearTag); // uso del schema
router.put('/:id',validateObjectId,validarTag,actualizarTag); // uso del schema
router.delete('/:id',validateObjectId,eliminarTag); 

module.exports = router;

