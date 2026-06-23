const Tag = require("../models/tag");

const validarQueExisteUnUnicoTag = async (req, res, next) => {
    try {
        const { tagId } = req.params;

        const tag = await Tag.findById(tagId);

        if (!tag) {
            return res.status(404).json({
                message: "Tag no encontrado"
            });
        }
        req.tag = tag
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = validarQueExisteUnUnicoTag;