const User = requier('../models/user.js');

const obtenerUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
    if (!users) {
      return res.status(404).json({ message: 'No se encontraron users' })
    }
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener usuarios",
    });
  }
};

const obtenerUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select(
      '-createdAt -updatedAt -__v'
    );
    if (!user) {
      return res.status(404).json({ message: 'User no encontrado' })
    }
    res.status(200).json(user);
  } catch {
    res.status(500).json({
      message: 'Error al obtener user'
    })
  }
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
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).json({ message: 'User no encontrado' })
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar usuario",
    });
  }
};

const eliminarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const delUser = User.findByIdAndDelete(id);
    if (!delUser) {
      return res.status(404).json({ message: 'User no encontrado' })
    }
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
