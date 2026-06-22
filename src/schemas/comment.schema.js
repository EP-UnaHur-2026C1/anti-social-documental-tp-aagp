const Joi = require("joi");

const commentSchema = Joi.object({
    content: Joi.string()
        .trim()
        .min(1)
        .max(500)
        .required()
        .messages({
            "string.base": "El comentario debe ser texto",
            "string.empty": "El comentario no puede estar vacío",
            "string.min": "El comentario no puede estar vacío",
            "string.max": "El comentario no puede superar los 500 caracteres",
            "any.required": "El contenido es obligatorio",
        }),
    visible: Joi.boolean(), // agregado si no no te deja crear
    userId: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.base": "El ID del usuario debe ser texto.",
            "string.hex": "El ID del usuario no es válido",
            "string.length": "El ID del usuario debe tener 24 caracteres",
            "any.required": "El usuario es obligatorio",
        }),
    postId: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.base": "El ID del post debe ser texto",
            "string.hex": "El ID del post no es válido",
            "string.length": "El ID del post debe tener 24 caracteres",
            "any.required": "El post es obligatorio",
        }),
});

module.exports = commentSchema;