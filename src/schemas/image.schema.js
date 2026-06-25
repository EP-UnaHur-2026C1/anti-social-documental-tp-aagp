const Joi = require('joi')

const imageSchemaa = Joi.object({
    url: Joi.string()
        .uri()
        .min(1)
        .max(100)
        .required()
        .messages({
            "string.base": "La url debe de ser texto",
            "string.empty": "La url es obligatoria",
            "string.min": "La url debe de tener al menos 1 caracter",
            "any.required": "La url es obligatoria"
        }),
    postId: Joi.string()
        .required()
        .messages({
            "number.base": "El postId debe de ser texto",
            "any.required": "El postId es obligatoria"
        }) 
})

module.exports = imageSchemaa