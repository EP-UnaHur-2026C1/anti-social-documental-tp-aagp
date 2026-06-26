const schemaPost = require('../schemas/post.schema');

const validarPost = (req, res, next) => {
    const { error } = schemaPost.validate(req.body)
    if(error){
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

module.exports = validarPost