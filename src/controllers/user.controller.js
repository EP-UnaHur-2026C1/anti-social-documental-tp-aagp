const User = require('../models/user.js');

const obtenerUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-createdAt -updatedAt -__v"
    )
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener usuarios",
    });
  }
};

const obtenerUser = (req, res) => {
  res.status(200).json(req.user);
};

const crearUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el usuario",
    });
  }
};

const actualizarUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar usuario",
    });
  }
};

const eliminarUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar usuario",
    });
  }
};

module.exports = {
  obtenerUsers,
  obtenerUser,
  crearUser,
  actualizarUser,
  eliminarUser
};
