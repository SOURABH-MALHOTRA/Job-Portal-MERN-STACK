const JobPost = require("../../model/job-creator");
const Applicant = require("../../model/job-seeker/job-application-form");
const CreateJob = async (req, res) => {
  try {
    const jobData = req.body;
    const newJobPost = new JobPost(jobData);
    await newJobPost.save();
    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job: newJobPost,
    });
  } catch (error) {
    console.error("Error creating job post:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create job post",
      error: error.message,
    });
  }
};

const GetAllJobs = async (req, res) => {
  try {
    const jobs = await JobPost.find();
    res.status(200).json({ success: true, Alljobs: jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};
const GetJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await JobPost.find({ userId: id });
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, job: job });
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
      error: error.message,
    });
  }
};
const UpdateJob = async (req, res) => {
  const { id } = req.params;
  const jobData = req.body;
  try {
    const updatedJob = await JobPost.findByIdAndUpdate(id, jobData, {
      new: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update job",
      error: error.message,
    });
  }
};
const DeleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJob = await JobPost.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete job",
      error: error.message,
    });
  }
};

 const getApplicantsForCreator = async (req, res) => {
  const { id } = req.params;
  try {
    // Step 1: Find all jobs by this creator
    const jobs = await JobPost.find({ userId: id });
    if (jobs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No jobs found for this creator" });
    }

    // Step 2: Extract job IDs
    const jobIds = jobs.map((job) => job._id);
     console.log("Job IDs:", jobIds);

    // Step 3: Find applicants & populate job info
    const applicants = await Applicant.find({
      jobId: { $in: jobIds },
    }).populate("jobId");
    console.log("Applicants found:", applicants);

    res.json({applicants});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  CreateJob,
  GetAllJobs,
  GetJobById,
  UpdateJob,
  DeleteJob,
  getApplicantsForCreator
};
