const Comment = require("../models/comment");

const obtenerComentariosVisibles = async (
    filtro = {},
    populatePost = false
) => {
    const visibleMonths = Number(process.env.COMMENT_VISIBLE_MONTHS) || 6;

    const fechaLimite = new Date();

    fechaLimite.setMonth(
        fechaLimite.getMonth() - visibleMonths
    );

    let consulta = Comment.find({
        ...filtro,
        createdAt: {
            $gte: fechaLimite
        }
    }).populate("userId", "nickname")

    if (populatePost) {
        consulta = consulta.populate("postId", "texto fecha");
    }

    const comentarios = await consulta.select(
        "-createdAt -updatedAt -__v"
    );

    return comentarios.filter(
        c => c.userId && (!populatePost || c.postId)
    );
};

module.exports = {
    obtenerComentariosVisibles
};