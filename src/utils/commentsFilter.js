const Comment = require("../models/comment");

const obtenerComentariosVisibles = async (filtro = {}) => {
    const visibleMonths = Number(process.env.COMMENT_VISIBLE_MONTHS) || 6;
    const fechaLimite = new Date();
    fechaLimite.setMonth(
        fechaLimite.getMonth() - visibleMonths
    );
    return await Comment.find({
        ...filtro,
        createdAt: {
            $gte: fechaLimite
        }
    })
};

module.exports = {
    obtenerComentariosVisibles
};