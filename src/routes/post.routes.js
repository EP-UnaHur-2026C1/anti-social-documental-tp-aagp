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
router.get("/:id", validarid, validarIdPost, obtenerPostPorId);
router.post("/", validarIdUser, validarPost, validarTags, publicarPost);
router.patch("/:id", validarid, validarIdPost, validarUpdatePost, actualizarContenidoPost);
router.delete("/:id", validarid, validarIdPost, eliminarPost);

router.patch("/:id/tags", validarid, validarIdPost, validarTagsArray, validarTags, agregarTagsAPost);
router.delete("/:id/tags/:tagId", validarid, validarIdPost, validarIdTag, quitarTagAPost);
router.delete("/:id/tags", validarid, validarIdPost, quitarTodosLosTagsAPost);

module.exports = router;
