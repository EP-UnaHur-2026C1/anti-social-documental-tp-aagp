const Joi = require('joi')

const imageSchemaAct = Joi.object({
    url: Joi.string()
        .min(1)
        .max(100)
        .required()
        .messages({
            "string.base": "La url debe de ser texto",
            "string.empty": "La url es obligatoria",
            "string.min": "La url debe de tener al menos 5 caracteres",
            "any.required": "La url es obligatoria"
        })
})

module.exports = imageSchemaAct