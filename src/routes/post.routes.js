const express = require("express");
const router = express.Router();
const validarIdPost = require('../middlewares/validarPostId');
const validarPost = require('../middlewares/validarPost');
const validarIdUser = require('../middlewares/validarUserId');
const validarPostCache = require('../middlewares/validarPostCache');

//tags imports
//const validarTagId = require('../middlewares/validarTagId');
//const validarTagsArray = require('../middlewares/validarTagsPost');
//const validarUpdatePost = require('../middlewares/validarPostAct');

const validarPostParActualizar = require('../middlewares/validarPostAct')

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

router.get("/:id", validarIdPost, obtenerPostPorId);
router.post("/", validarIdUser, validarPost, publicarPost);
router.patch("/:id", validarIdPost, validarPost, actualizarPost); // validarUpdatePost
router.delete("/:id", validarIdPost, eliminarPost);

/*
router.get("/:id", validarId, validarIdPost, obtenerPostPorId);
router.post("/", validarPost,validarTagExiste,validarUserId,publicarPost);
router.patch("/:id", validarId, validarIdPost, validarPostParActualizar, actualizarPost);
router.delete("/:id", validarId, validarIdPost, eliminarPost);
*/




// TAG
//router.patch("/:id/tags/:tagId", validarIdPost, validarTagId, agregarTagAPost)
//router.patch("/:id/tags", validarIdPost, validarTagsArray, agregarTagsAPost)
//router.delete("/:id/tags/:tagId", validarIdPost, validarTagId, quitarTagAPost)
//router.delete("/:id/tags", validarIdPost, validarTagsArray, quitarTodosLosTagsAPost)


//develop
router.patch("/:id/tags/:tagId", validarId,validarUnicoTagExistente,agregarTagAPost) // funciona
router.patch("/:id/tags", validarId, agregarTagsAPost) // funciona
router.delete("/:id/tags/:tagId", validarId, quitarTagAPost) //
router.delete("/:id/tags", validarId, quitarTodosLosTagsAPost) // funciona
module.exports = router;