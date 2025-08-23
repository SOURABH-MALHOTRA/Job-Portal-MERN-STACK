const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new multer.memoryStorage();

async function ResumeUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "raw",
    access_mode: "public",
    secure: true,
    public_id: "resume_" + Date.now(),
    
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, ResumeUploadUtil };