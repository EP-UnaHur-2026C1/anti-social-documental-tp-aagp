const schemaCommentAct = require("../schemas/commentSchemaAct");

const validarCommentActualizado = (req, res, next) => {
    const { error } = schemaCommentAct.validate(req.body)
    if(error){
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

module.exports = validarCommentActualizado;