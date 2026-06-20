const User = require("../models/user");
const validarUserCommentExistencia = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error al validar el usuario",
            error: error.message
        });
    }
};
module.exports = validarUserCommentExistencia;