import multer from "multer";
import path from "path";
import fs from "fs";

fs.mkdirSync("uploads", { recursive: true });

// multer file upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const generateUniqueName =
      Date.now() + "_" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const fileOriginalName = req.body.name || "file";
    cb(null, fileOriginalName + "_" + generateUniqueName + ext);
  },
});

// check for file type
const checkFileType = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("You can only upload theses file types (.jpg, .jpeg, .png)"));
  }
};

//  check for file size
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: checkFileType,
});

export default upload;
