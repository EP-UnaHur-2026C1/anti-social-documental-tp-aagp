const schemaPostAct = require("../schemas/postAct.schema");

const validarPostActualizado = (req, res, next) => {
    const { error } = schemaPostAct.validate(req.body)
    if(error){
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

module.exports = validarPostActualizado;