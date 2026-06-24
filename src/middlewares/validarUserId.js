const User = require('../models/user')

const validarUserId = async (req, res, next) => {
  try {
    const id = req.params.id || req.body.user
    const user = await User.findById(id).select(
      '-password -createdAt -updatedAt -__v'
    );
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    req.user = user
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener usuario',
      error: error.message
    })
  }
}

module.exports = validarUserId
