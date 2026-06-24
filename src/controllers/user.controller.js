const { User, Post } = require('../models');
const { agregarRelacionesPosts } = require("../utils/agregarRelacionesPosts");

const obtenerUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-email -password -createdAt -updatedAt -__v"
    )
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener usuarios",
      error: error.message
    });
  }
};

const obtenerUser = async (req, res) => {
  try {
    const user = req.user;
    const posts = await Post.find({
      user: user._id
    })
      .populate("tags", "nombre")
      .select("-createdAt -updatedAt -__v -user");
    const postsConRelaciones = await agregarRelacionesPosts(posts);
    const respuesta = {
      ...(typeof user.toObject === "function"
        ? user.toObject()
        : user),
      posts: postsConRelaciones
    };
    res.status(200).json({
      origen: req.origen,
      user: respuesta
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener usuario.",
      error: error.message
    });
  }
};

const crearUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message
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
