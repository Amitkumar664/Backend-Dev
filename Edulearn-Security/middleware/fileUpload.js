const multer = require("multer");

const upload = multer({
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.includes("pdf") && !file.mimetype.includes("image")) {
      return cb(new Error("Invalid file"));
    }
    cb(null, true);
  }
});

module.exports = upload;