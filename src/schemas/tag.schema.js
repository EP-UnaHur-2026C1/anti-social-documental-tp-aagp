const Joi = require('joi')

const tagSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.base" : "El nombre debe de ser texto",
            "string.empty" : "El nombre es obligatorio",
            "string.min" : "El nombre debe de tener al menos 3 caracteres",
            "any.required": "El nombre es obligatorio"
        })
})

module.exports = tagSchema