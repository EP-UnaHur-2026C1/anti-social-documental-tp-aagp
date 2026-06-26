const mongoose = require("mongoose");

const validarPostIdParam = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.postId)) {
        return res.status(400).json({
            error: "El ID del post no es válido"
        });
    }
    next();
};

module.exports = validarPostIdParam;