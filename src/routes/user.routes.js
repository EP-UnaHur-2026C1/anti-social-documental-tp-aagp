const { Router } = require("express");
const {
  obtenerUsers,
  obtenerUser,
  crearUser,
  actualizarUser,
  eliminarUser,
  obtenerUserComments,
  obtenerPostPorUsuario
} = require("../controllers/user.controller");
const validarUser = require("../middlewares/validarUser")
const validateObjectId = require("../middlewares/validateObjectId")
const validarUserId = require('../middlewares/validarUserId')
const router = Router();

router.get("/", obtenerUsers);
router.get("/:id", validateObjectId, validarUserId, obtenerUser);
router.post("/", validarUser, crearUser);
router.put("/:id", validateObjectId, validarUserId, validarUser, actualizarUser);
router.delete("/:id", validateObjectId, validarUserId, eliminarUser);

router.get("/:id/posts", validateObjectId, validarUserId, obtenerPostPorUsuario);
router.get("/:id/comments", validateObjectId, validarUserId, obtenerUserComments);

module.exports = router;