const Tag = require("../models/tag")

const validarQueTagsExistan = async (req, res, next) => {
    try {
        const { tags } = req.body;
        const tagsEncontrados = await Tag.find({
            _id: { $in: tags }
        });
        if (!req.body.tags) {
            return next();
        }
        if (tagsEncontrados.length !== tags.length) {
            return res.status(404).json({
                message: "Uno o más tags ingresados no existen"
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = validarQueTagsExistan; 