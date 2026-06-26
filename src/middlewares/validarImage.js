const imgSchema = require('../schemas/image.schema')

const validarImage = (req,res,next) =>{
    const { error } = imgSchema.validate(req.body)
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }
    next()
}

module.exports = validarImage