const express = require("express");
const router = express.Router();
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');
const validarPostParActualizar = require('../middlewares/validarPostAct')
/* 
const { validarTagId } = require('../middlewares/validarTagId');
const validarTag = require('../middlewares/validarTag'); */

const validarTagExiste = require("../middlewares/validarExistenciaTags")
const validarUserId = require("../middlewares/validarUserId")
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
router.get("/:id", validarId, validarIdPost, obtenerPostPorId);
router.post("/", validarPost,validarTagExiste,validarUserId,publicarPost);
router.patch("/:id", validarId, validarIdPost, validarPostParActualizar, actualizarPost);
router.delete("/:id", validarId, validarIdPost, eliminarPost);




// TAG
//router.patch("/:id/tags/:tagId", validarIdPost, validarTagId, agregarTagAPost)
//router.patch("/:id/tags", validarIdPost, validarTagsArray, agregarTagsAPost)
//router.delete("/:id/tags/:tagId", validarIdPost, validarTagId, quitarTagAPost)
//router.delete("/:id/tags", validarIdPost, validarTagsArray, quitarTodosLosTagsAPost)

module.exports = router;