const express = require("express");
const router = express.Router();
const validarId = require('../middlewares/validateObjectId');
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
router.patch("/:id/tags/:tagId", validarId,validarUnicoTagExistente,agregarTagAPost) // funciona
router.patch("/:id/tags", validarId, agregarTagsAPost) // funciona
router.delete("/:id/tags/:tagId", validarId, quitarTagAPost) //
router.delete("/:id/tags", validarId, quitarTodosLosTagsAPost) // funciona

module.exports = router;