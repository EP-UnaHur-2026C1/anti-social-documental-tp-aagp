const { Router } = require("express");
const router = Router();
const validarComentario = require("../middlewares/validarComentario");
const validarComentarioId = require("../middlewares/validarComentarioId");
const validateObjectId = require("../middlewares/validateObjectId");
const validarUserComment = require("../middlewares/validarUserComment")
const validarExistenciaPost = require("../middlewares/validarExistenciaPost")
const validarPostIdParam = require("../middlewares/validarPostIdParam");
const validarComentarioAct = require("../middlewares/validarCommentAct")

const {
    obtenerComentarios,
    obtenerComentariosPorPost,
    obtenerComentario,
    crearComentario,
    actualizarComentario,
    eliminarComentario
} = require("../controllers/comment.controller");

router.get("/", obtenerComentarios);
router.get("/post/:postId", validarPostId, obtenerComentariosPorPost);
router.get("/:id", validateObjectId, validarComentarioId, obtenerComentario);
router.post("/", validarUserComment, validarExistenciaPost, validarComentario, crearComentario);
router.put("/:id", validateObjectId, validarComentarioId, validarComentarioAct, actualizarComentario);
router.delete("/:id", validateObjectId, validarComentarioId, eliminarComentario);

module.exports = router;