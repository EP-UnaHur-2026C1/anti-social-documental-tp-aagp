const { Router } = require("express");
const {
  obtenerUsers,
  obtenerUser,
  crearUser,
  actualizarUser,
  eliminarUser
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

module.exports = router;
