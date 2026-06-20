const express = require("express");
const router = express.Router();
const validarId = require('../middlewares/validateObjectId');
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');

// nuevo middleware para actualizar sin el requeried del user
const validarPostParActualizar = require('../middlewares/validarPostAct')
/* 
const { validarTagId } = require('../middlewares/validarTagId');
const validarTag = require('../middlewares/validarTag'); */

const validarTagExiste = require("../middlewares/validarExistenciaTag")
const validarUserExiste = require("../middlewares/validarExistenciaUser")

const {
    obtenerPosts,
    obtenerPostPorId,
    publicarPost,
    actualizarPost,
    eliminarPost,
    agregarTagAPost,
    quitarTagAPost,
    agregarTagsAPost,
    quitarTodosLosTagsAPost,
} = require("../controllers/post.controller");

router.get("/", validarPostCache, obtenerPosts);
router.get("/:id", validarId, validarIdPost, obtenerPostPorId);
//validarIdUser
router.post("/", validarPost,validarTagExiste,validarUserExiste,publicarPost);
// nuevo schema para actualizar
router.patch("/:id", validarId, validarIdPost, validarPostParActualizar, actualizarPost);
router.delete("/:id", validarId, validarIdPost, eliminarPost);

// TAG
router.patch("/:id/tags/:tagId", validarId,validarTagExiste,agregarTagAPost)
router.patch("/:id/tags", validarId, agregarTagsAPost)
router.delete("/:id/tags/:tagId", validarId, quitarTagAPost)
router.delete("/:id/tags", validarId, quitarTodosLosTagsAPost)

module.exports = router;