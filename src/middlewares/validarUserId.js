const User = require('../models/user')

const validarUserId = async (req, res, next) => {
  try {
    const id = req.params.id || req.body.user
    const user = await User.findById(id).select(
      '-createdAt -updatedAt -__v'
    );
    if (!user) {
      return res.status(404).json({ message: 'User no encontrado' })
    }
    req.user = user
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener user',
      error: error.message
    })
  }
}

module.exports = validarUserId
