const schemaTagsPost = require("../schemas/postTag.schema");

const validarTagsPost = (req,res,next) => {
    const { error } = schemaTagsPost.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }

    next();
};

module.exports = validarTagsPost;