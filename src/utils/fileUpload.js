const multer = require('multer');
const path = require('path')
const fileConfig = require('../config/fileConfig');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, fileConfig.destination); // store in destination config
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) // store in unique filename
  }
})

const upload = multer({ storage: storage })

module.exports = upload;
