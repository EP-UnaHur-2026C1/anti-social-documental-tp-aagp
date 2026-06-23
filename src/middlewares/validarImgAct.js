const schemaImgtAct = require("../schemas/imageAct.schema");

const validarImageActualizado = (req, res, next) => {
    const { error } = schemaImgtAct.validate(req.body)
    if(error){
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

module.exports = validarImageActualizado;