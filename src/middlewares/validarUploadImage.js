const validarUploadImage = (req, res, next) => {

  if (!req.file) {
    return res.status(400).json({
      error: 'Debe subir una imagen',
    });
  };

  if (!req.body.postId) {
    return res.status(400).json({
      error: 'postId es obligatorio',
    });
  };

  next();
};

module.exports = validarUploadImage;
