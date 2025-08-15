// models/Job.js

const mongoose = require("mongoose");

const CreateJob = new mongoose.Schema(
  {
    userId: { type: String, required: true },

    company: {
      type: String,
      required: true,
      trim: true,
    },
    jobCategory: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    jobType: {
      type: String,
      required: true,
      trim: true,
    },
    skills: {
      type: String,
      required: true,
    },

    salary: {
      type: String, // you can use Number if salary is numeric
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    contactEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobPost", CreateJob);
