const express = require("express");
const router = express.Router();
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');

//tags imports
const validarTagId = require('../middlewares/validarTagId');
const validarTagsArray = require('../middlewares/validarTagsPost');
const validarUpdatePost = require('../middlewares/validarPostAct');

// VALIDAR TAG EXISTE ---> ARRAY DE TAGS NO SIRVE PARA AGREGAR UNO SOLO
const validarTagExiste = require("../middlewares/validarExistenciaTags")
const validarUserId = require("../middlewares/validarUserId")

//
const validarUnicoTagExistente = require("../middlewares/existenciaUnicoTag")
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
router.get("/:id", validarIdPost, obtenerPostPorId);
router.post("/", validarIdUser, validarPost, publicarPost);
router.patch("/:id", validarIdPost, validarPost, actualizarPost);
router.delete("/:id", validarIdPost, eliminarPost);

// TAG
router.patch("/:id/tags/:tagId", validarIdPost, validarTagId, agregarTagAPost)
router.patch("/:id/tags", validarIdPost, validarTagsArray, agregarTagsAPost)
router.delete("/:id/tags/:tagId", validarIdPost, validarTagId, quitarTagAPost)
router.delete("/:id/tags", validarIdPost, validarTagsArray, quitarTodosLosTagsAPost)

module.exports = router;