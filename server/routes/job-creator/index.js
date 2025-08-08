const {CreateJob, GetAllJobs, GetJobById, UpdateJob, DeleteJob } = require('../../controllers/job-creator');
const express = require('express');
const router = express.Router();                    
// Route to create a new job post                           
router.post('/create-job', CreateJob);
// Route to get all job posts                               
router.get('/all-jobs', GetAllJobs);
// Route to get a job post by ID            
router.get('/:id', GetJobById); 

// Route to update a job post by ID                 
router.put('/:id', UpdateJob);  

// Route to delete a job post by ID 
router.delete('/:id', DeleteJob);
// Export the router           
module.exports = router;
                    

            