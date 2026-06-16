const { Router } = require("express");
const router = Router();
const validarComentario = require("../middlewares/validarComentario");
const validarComentarioId = require("../middlewares/validarComentarioId");
//const validarUserComentario = require("../middlewares/validarUserComentario");
//const validarPostComentario = require("../middlewares/validarPostComentario");
const validarPostIdParam = require("../middlewares/validarPostIdParam");
//const validateObjectId = require("../middlewares/validateObjectId");

const {
    obtenerComentarios,
    obtenerComentarioPorPost,
    obtenerComentario,
    crearComentario,
    actualizarComentario,
    eliminarComentario
} = require("../controllers/comment.controller");

router.get("/", obtenerComentarios);
router.get("/post/:postId", validarPostIdParam, obtenerComentarioPorPost);
router.get("/:id", /*validateObjectId,*/ validarComentarioId, obtenerComentario);
router.post("/", /*validarUserComentario, validarPostComentario,*/ validarComentario, crearComentario);
router.put("/:id", /*validateObjectId,*/ validarComentarioId, validarComentario, actualizarComentario);
router.delete("/:id", /*validateObjectId,*/ validarComentarioId, eliminarComentario);

module.exports = router;