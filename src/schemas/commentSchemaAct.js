const Joi = require("joi");

const commentSchemaAct = Joi.object({
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
});

module.exports = commentSchemaAct;