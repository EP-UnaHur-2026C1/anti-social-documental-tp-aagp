const Joi = require("joi");

const schemaTagsPost = Joi.object({
    tags: Joi.array()
        .items(
            Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        )
        .min(1)
        .required()
        .messages({
            "array.base": "tags debe ser un arreglo.",
            "array.min": "Debe enviar al menos un tag.",
            "any.required": "tags es obligatorio."
        })
});

module.exports = schemaTagsPost;