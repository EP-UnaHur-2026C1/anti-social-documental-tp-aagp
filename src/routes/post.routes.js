const express = require("express");
const router = express.Router();
/* const validarPost = require('../middlewares/validarPost');
const validarPostId = require('../middlewares/validarPostId');
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

router.get("/", obtenerPosts);
router.get("/:id", obtenerPostPorId);
router.post("/", publicarPost);
router.patch("/:id", actualizarPost);
router.delete("/:id", eliminarPost);

// TAG
router.patch("/:id/tags/:tagId", agregarTagAPost)
router.patch("/:id/tags", agregarTagsAPost)
router.delete("/:id/tags/:tagId", quitarTagAPost)
router.delete("/:id/tags", quitarTodosLosTagsAPost)

module.exports = router;