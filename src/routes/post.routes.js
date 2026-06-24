const express = require("express");
const router = express.Router();
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');
const validarUpdatePost = require('../middlewares/validarPostAct');

//tags imports
const validarIdTag = require("../middlewares/existenciaUnicoTag"); // Valida ID específico para :tagsId
const validarTagsArray = require('../middlewares/validarTagsPost'); // Valida input
const validarTags = require("../middlewares/validarExistenciaTags"); // Valida existencia
const validarid = require('../middlewares/validateObjectId')

const {
    obtenerPosts,
    obtenerPostPorId,
    publicarPost,
    actualizarPost,
    eliminarPost,
    quitarTagAPost,
    agregarTagsAPost,
    quitarTodosLosTagsAPost,
} = require("../controllers/post.controller");

router.get("/", validarPostCache, obtenerPosts);
router.get("/:id", validarIdPost, obtenerPostPorId);
router.post("/", validarIdUser, validarPost, validarTags, publicarPost);
router.patch("/:id", validarIdPost, validarUpdatePost, actualizarPost);
router.delete("/:id", validarIdPost, eliminarPost);

// TAG
router.patch("/:id/tags", validarIdPost, validarTagsArray, validarTags, agregarTagsAPost);
router.delete("/:id/tags/:tagId", validarIdPost, validarIdTag, quitarTagAPost);
router.delete("/:id/tags", validarIdPost, validarTagsArray, validarTags, quitarTodosLosTagsAPost);

module.exports = router;