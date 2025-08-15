const {
  CreateJob,
  GetAllJobs,
  GetJobById,
  UpdateJob,
  DeleteJob,
  getApplicantsForCreator,
} = require("../../controllers/job-creator");
const express = require("express");
const router = express.Router();
// Route to create a new job post
router.post("/create-job", CreateJob);
// Route to get all job posts
router.get("/all-jobs", GetAllJobs);
// Route to get a job post by ID
router.get("/:id", GetJobById);

// Route to update a job post by ID
router.put("/:id", UpdateJob);

// Route to delete a job post by ID
router.delete("/:id", DeleteJob);

// Route to get all applicants for a job creator
router.get("/applicants/:id", getApplicantsForCreator);
// Export the router
module.exports = router;
