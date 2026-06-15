const express = require("express")
const router = express.Router();

const{
    obtenerTagPorId,
    obtenerTags,
    crearTag,
    actualizarTag,
    eliminarTag
} = require("../controllers/tag.controller")

router.get('/',obtenerTags);
router.get('/:id',obtenerTagPorId);
router.post('/',crearTag);
router.put('/:id',actualizarTag);
router.delete('/:id',eliminarTag);

module.exports = router;
