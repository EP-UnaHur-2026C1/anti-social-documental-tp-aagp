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
const router = Router();

router.get("/", obtenerUsers);
router.get("/:id", validateObjectId, obtenerUser);
router.post("/", validarUser, crearUser);
router.put("/:id", validateObjectId, validarUser, actualizarUser);
router.delete("/:id", validateObjectId, eliminarUser);

module.exports = router;
