const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  userId: { type:String, required: true },
  jobId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "JobPost",
  required: true
},
  role: {
    type: String,
    required: true,
   
  },

  // Common fields
  fullName: { type: String, required: true },
  email: {type: String},
  phone:  {type: String},
  resume: { type: String, required:true }, // file path / cloud URL
  experience:  {type: Number},

  // Engineering
  github:  {type: String},
  cpi:  {type: String},
  tenthMarks:  {type: String},
  twelfthMarks:  {type: String},
  branch:  {type: String},

  // HR
  hrCertifications:  {type: String},
  interviewSkills:  {type: String},
  hiringTools:  {type: String},
  communicationSkills:  {type: String},

  // Marketing
  portfolio:  {type: String},
  skills:  {type: String},
  certifications:  {type: String},
  campaignExperience:  {type: String},

  // Sales
  salesTarget:  {type: String},
  region:  {type: String},
  crmExperience:  {type: String}
}, { timestamps: true });

module.exports = mongoose.model("Applicant", applicantSchema);




    