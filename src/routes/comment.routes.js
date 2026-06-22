const { Router } = require("express");
const router = Router();
const validarComentario = require("../middlewares/validarComentario");
const validarComentarioId = require("../middlewares/validarComentarioId");
const validateObjectId = require("../middlewares/validateObjectId");


// CAMBIAMOS PARA UNIFICARLOS
//const validarUserComentario = require("../middlewares/validarUserComentario");
const validarUserComment = require("../middlewares/validarUserComment")
//const validarPostComentario = require("../middlewares/validarPostComentario");
const validarExistenciaPost = require("../middlewares/validarExistenciaPost")
// este dejarlo porque es diferente al validateObjectID
const validarPostIdParam = require("../middlewares/validarPostIdParam");

// validar para actualizar
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
//router.put("/:id", validateObjectId, validarComentarioId, validarComentario, actualizarComentario);
router.put("/:id", validateObjectId, validarComentarioId, validarComentarioAct, actualizarComentario);

router.delete("/:id", validateObjectId, validarComentarioId, eliminarComentario);

module.exports = router;

