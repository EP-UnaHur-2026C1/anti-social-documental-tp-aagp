const Joi = require('joi')

const imageSchemaa = Joi.object({
    url: Joi.string()
        .min(5)
        .max(100)
        .required()
        .messages({
            "string.base": "La url debe de ser texto",
            "string.empty": "La url es obligatoria",
            "string.min": "La url debe de tener al menos 5 caracteres",
            "any.required": "La url es obligatoria"
        }),
    postId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "El postId debe de ser un numero",
            "any.required": "El postId es obligatoria"
        }) 
})
module.exports = imageSchemaa