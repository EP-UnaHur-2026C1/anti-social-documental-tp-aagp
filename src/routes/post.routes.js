const express = require("express");
const router = express.Router();

const {
    obtenerPost,
    obtenerPostPorId,
    publicarPost,
    actualizarPost,
    eliminarPost,
} = require("../controllers/post.controller");

router.get("/", obtenerPost);
router.get("/:id", obtenerPostPorId);
router.post("/", publicarPost);
router.patch("/:id", actualizarPost);
router.delete("/:id", eliminarPost);