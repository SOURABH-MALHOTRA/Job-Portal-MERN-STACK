const express = require('express');
const router = express.Router();
const {upload} = require("../../../cloudinary/index.js");
const {handleResumeUpload} = require("../../../controllers/job-seeker/Applicant-Form/index.js");
const {CreateApplicant, GetApplicantByUserId} = require("../../../controllers/job-seeker/Applicant-Form/index.js");


router.post("/createapplicant",CreateApplicant);
router.get("/getapplicant/:id",GetApplicantByUserId);
router.post("/upload-resume", upload.single("my_file"), handleResumeUpload)
module.exports=router;