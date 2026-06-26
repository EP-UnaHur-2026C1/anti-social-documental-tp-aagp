const Joi = require("joi")

const userSchema = Joi.object({
  nickname: Joi.string().alphanum().min(3).max(64).required().messages({
    "string.base": "El nickname debe ser texto",
    "string.empty": "El nickname no puede estar vacío",
    "string.min": "El nickname debe tener al menos 3 caracteres",
    "string.max": "El nickname no puede superar los 64 caracteres",
    "any.required": "El nickname es obligatorio"
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    "string.base": "El email debe ser texto",
    "string.empty": "El email no puede estar vacío",
    "string.email": "El email debe ser un correo válido (ejemplo: usuario@dominio.com)",
    "any.required": "El email es obligatorio"
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
    "string.base": "La contraseña debe ser texto",
    "string.empty": "La contraseña no puede estar vacía",
    "string.pattern.base": "La contraseña debe tener entre 3 y 30 caracteres (letras y números)",
    "any.required": "La contraseña es obligatoria"
  })
})

module.exports = userSchema;
