const express = require("express");
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId')
const validarImage = require('../middlewares/validarImage')
const validarUploadImage = require('../middlewares/validarUploadImage')
const upload = require('../config/multer')
const {
  obtenerImagenes,
  obtenerImagenPorId,
  crearImagen,
  eliminarImagen,
  actualizarImagen,
  subirImagen
} = require('../controllers/image.controller')

router.get('/', obtenerImagenes);
router.get('/:id', validateObjectId, obtenerImagenPorId); // verifico el id sea correcto
router.post('/', validarImage, crearImagen); // schema
router.put('/:id', validateObjectId, validarImage, actualizarImagen); // verifico id y valido shcema
router.delete('/:id', validateObjectId, eliminarImagen); // verifico id

router.post(
  '/upload',
  upload.single('image'),
  validarUploadImage,
  subirImagen
);

module.exports = router;

/*
    ESTO TODAVIA NO LO PROBE !!!!!!!!!!!!!
*/
