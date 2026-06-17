const commentSchema = require("../schemas/comment.schema");

const validarComentario = (req, res, next) => {
    const { error } = commentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
};

module.exports = validarComentario;