const Joi = require('joi');

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const schemaPostParaActualizar = Joi.object({
    texto: Joi.string()
        .trim()
        .min(2)
        .max(500)
        .required()
        .messages({
            "string.base": "La descripción debe ser texto.",
            "string.empty": "La descripción no debe estar vacía.",
            "string.min": "La descripción es muy corta.",
            "string.max": "La descripción es muy larga.",
            "any.required": "La descripción es obligatoria."
        }),
    tags: Joi.array()
        .items(
            Joi.string()
            .regex(objectIdRegex)
            .messages({
                "string.pattern.base": "ID de tag no válido.",
            })
        )
});
module.exports = schemaPostParaActualizar;