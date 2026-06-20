const Joi = require("joi");

const schemaTagsPost = Joi.object({
    tagsIds: Joi.array()
        .items(
            Joi.number()
                .integer()
                .positive()
        )
        .min(1)
        .required()
        .messages({
            "array.base": "tagsIds debe ser un arreglo.",
            "array.min": "Debe enviar al menos un tag.",
            "any.required": "tagsIds es obligatorio."
        })
});

module.exports = schemaTagsPost;