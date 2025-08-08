import React from "react";
import { Mail, MapPin, Building2, Clock, Briefcase, Star, Heart, Share2, Eye } from "lucide-react";
import { useEffect } from "react";
import { getAllJobs } from "@/store/job-creator/index.js";
import { useDispatch } from "react-redux";  
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function JobCardList({ jobPosts }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);
    const [category, setCategory] = useState("");

  const getCompanyLogo = (company) => {
    const logos = {
      'TechCorp': '🏢',
      'StartupXYZ': '🚀',
      'DesignHub': '🎨',
      'DataFlow': '📊',
      'WebTech': '⚛️',
      'CloudOps': '☁️',
      'default': '🏢'
    };
    return logos[company] || logos['default'];
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Engineering': '⚙️',
      'Marketing': '📈',
      'Sales': '🤝',
      'Human Resources': '👥',
      
      'default': '💼'
    };
    return icons[category] || icons['default'];
  };

  if (!jobPosts || jobPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="text-center bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6.341"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            No Job Posts Available
          </h3>
          <p className="text-slate-600 text-lg mb-6 max-w-md mx-auto">
            We're currently updating our job listings. Please check back soon for exciting opportunities!
          </p>
        
        </div>
      </div>
    );
  }
    

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-6 py-4 mt-20" >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Available Jobs</h1>
              <p className="text-slate-600 mt-1">{jobPosts.length} opportunities waiting for you</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pt-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
          {jobPosts.map((job, index) => (
            <div
              key={job._id}
              className="group relative bg-white hover:bg-slate-50 shadow-md hover:shadow-2xl rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden "
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {getCompanyLogo(job.company)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  {/* <div className="flex gap-2">
                    
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4 text-slate-400 hover:text-blue-500" />
                    </button>
                  </div> */}
                </div>

                {/* Location and Job Type */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    <span className="text-sm font-medium">{job.location}</span>
                  </div>
                  <span
                    className={`px-4 py-2  rounded-full text-xs font-semibold ${
                      job.jobType === "Full-time"
                        ? "bg-emerald-100 text-emerald-700"
                        : job.jobType === "Hybrid"
                        ? "bg-amber-100 text-amber-700"
                        : job.jobType === "Remote"
                        ? "bg-blue-100 text-blue-700"
                        : job.jobType === "Part-time"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {job.jobType}
                  </span>
                </div>

                {/* Job Category */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2">
                    <span className="text-lg mr-2">{getCategoryIcon(job.jobCategory)}</span>
                    <span className="text-sm font-medium text-slate-700">{job.jobCategory}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-2">
                  {job.description}
                </p>
              </div>

              {/* Skills Section */}
              <div className="px-6 pb-4">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Required Skills</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-sm text-slate-700 line-clamp-2 font-medium">{job.skills}</p>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">💰</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Salary</p>
                      <p className="font-bold text-sm text-slate-800">₹{job.salary}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Briefcase className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Experience</p>
                      <p className="font-bold text-sm text-slate-800">{job.experience} years</p>
                    </div>
                  </div>
                </div>

                {/* Contact Email */}
                <div className="flex items-center text-sm text-slate-600 mb-4 bg-slate-50 rounded-lg p-3">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="text-blue-600 font-medium">{job.contactEmail}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-4 h-4 mr-1.5" />
                    <span>Apply before: </span>
                    <span className="font-semibold text-red-600 ml-1">
                      {new Date(job.applicationDeadline).toLocaleDateString()}
                    </span>
                  </div>
                  
                </div>
                
                <button 
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95" 
                  onClick={() => navigate(`/ApplyForm/${job.jobCategory}`)}
                >
                  Apply Now
                </button>
              </div>
             
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/3 to-indigo-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default JobCardList;