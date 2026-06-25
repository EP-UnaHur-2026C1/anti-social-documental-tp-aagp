const express = require("express")
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')
const validarTag = require('../middlewares/validarTag')
const validarTagId = require("../middlewares/validarTagId")

const {
    obtenerTagPorId,
    obtenerTags,
    crearTag,
    actualizarTag,
    eliminarTag
} = require("../controllers/tag.controller")

router.get('/', obtenerTags);
router.get('/:id', validateObjectId, validarTagId, obtenerTagPorId);
router.post('/', validarTag, crearTag);
router.put('/:id', validateObjectId, validarTag, validarTagId, actualizarTag);
router.delete('/:id', validateObjectId, validarTagId, eliminarTag);

module.exports = router;