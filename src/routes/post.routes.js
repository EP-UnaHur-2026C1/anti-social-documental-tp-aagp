const express = require("express");
const router = express.Router();
const validarId = require('../middlewares/validateObjectId');
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');
/* 
const { validarTagId } = require('../middlewares/validarTagId');
const validarTag = require('../middlewares/validarTag'); */

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
router.post("/", validarIdUser, validarPost, publicarPost);
router.patch("/:id", validarId, validarIdPost, validarPost, actualizarPost);
router.delete("/:id", validarId, validarIdPost, eliminarPost);

// TAG
router.patch("/:id/tags/:tagId", validarId, agregarTagAPost)
router.patch("/:id/tags", validarId, agregarTagsAPost)
router.delete("/:id/tags/:tagId", validarId, quitarTagAPost)
router.delete("/:id/tags", validarId, quitarTodosLosTagsAPost)

module.exports = router;