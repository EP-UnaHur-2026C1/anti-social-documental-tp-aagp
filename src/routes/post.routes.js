const express = require("express");
const router = express.Router();
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');
const validarUpdatePost = require('../middlewares/validarPostAct');

const validarIdTag = require("../middlewares/existenciaUnicoTag"); 
const validarTagsArray = require('../middlewares/validarTagsPost'); 
const validarTags = require("../middlewares/validarExistenciaTags"); 
const validarid = require('../middlewares/validateObjectId')

const {
    obtenerPosts,
    obtenerPostPorId,
    publicarPost,
    actualizarContenidoPost,
    eliminarPost,
    quitarTagAPost,
    agregarTagsAPost,
    quitarTodosLosTagsAPost,
} = require("../controllers/post.controller");

router.get("/", validarPostCache, obtenerPosts);
router.get("/:id", validarIdPost, obtenerPostPorId);
router.post("/", validarIdUser, validarPost, validarTags, publicarPost);
router.patch("/:id", validarIdPost, validarUpdatePost, actualizarContenidoPost);
router.delete("/:id", validarIdPost, eliminarPost);

router.patch("/:id/tags", validarIdPost, validarTagsArray, validarTags, agregarTagsAPost);
router.delete("/:id/tags/:tagId", validarIdPost, validarIdTag, quitarTagAPost);
router.delete("/:id/tags", validarIdPost, quitarTodosLosTagsAPost);

module.exports = router;