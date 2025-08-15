const Applicant = require("../../../model/job-seeker/job-application-form");
const {ResumeUploadUtil} = require("../../../cloudinary/index.js")

const handleResumeUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await ResumeUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

const CreateApplicant = async (req, res) => {
  try {
    const applicantData = req.body;
    const newApplicant = new Applicant(applicantData);
    await newApplicant.save();
    res.status(201).json({ success: true, message: "Application submitted successfully", applicant: newApplicant });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ success: false, message: "Failed to submit application", error: error.message });
  }
}

const GetApplicantByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const applicants = await Applicant.find({ userId: id })
      .populate("jobId", "company title jobCategory jobType location salary skills applicationDeadline experience contactEmail createdAt"); 
      // populate me jo fields chahiye wo specify kar

    if (!applicants || applicants.length === 0) {
      return res.status(404).json({ success: false, message: "No applications found" });
    }

    res.status(200).json({ success: true, applicants });
  } catch (error) {
    console.error("Error fetching application by user ID:", error);
    res.status(500).json({ success: false, message: "Failed to fetch applications", error: error.message });
  }
};


module.exports ={CreateApplicant, GetApplicantByUserId, handleResumeUpload};