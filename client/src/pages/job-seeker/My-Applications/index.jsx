import React, { use, useState } from "react";
import { Calendar, MapPin, DollarSign, Download, Eye } from "lucide-react";
import { getAllJobApplicationByUserId } from "@/store/job-seeker/job-application-form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const MyApplications = () => {
  const { user } = useSelector((state) => state.auth);
  const { AllJobApplicationByUserId } = useSelector((state) => state.jobSeeker);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.id) {
      dispatch(getAllJobApplicationByUserId(user.id));
    }
  }, [dispatch, user]);

  const getJobTypeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-red-800 border-green-200";
      case "Part-time":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Internship":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Remote":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleResumeAction = (action, fileName) => {
    if (action === "download") {
      // Simulate download
      alert(`Downloading ${fileName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-blue-600">
              {AllJobApplicationByUserId.length}
            </div>
            <div className="text-gray-600">Total Applications</div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4 ">
          {AllJobApplicationByUserId.map((application) => (
            <div
              key={application._id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* Main Info */}
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2 sm:mb-0">
                        {application.jobId.title}
                      </h3>
                      <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        ✓ Applied
                      </span>
                    </div>
                    </div>

                    <p className="text-lg text-black mb-3">
                      {application.jobId.company}
                    </p>

                    {/* Job Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span
                        className={`px-2 py-1 rounded border ${getJobTypeColor(
                          application.jobId.jobType
                        )}`}
                      >
                        {application.jobId.jobType}
                      </span>

                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-700" />
                        <span>{application.jobId.location}</span>
                      </div>

                      {application.jobId.salary && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-green-700" />
                          <span>{application.jobId.salary}</span>
                        </div>
                      )}
                    </div>

                    {/* Dates */}
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4 text-orange-700" />
                        <span>
                          Posted: {formatDate(application.jobId.createdAt)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-purple-700" />
                        <span>
                          Applied: {formatDate(application.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Resume Actions */}
                  <div className="lg:ml-6 flex flex-col sm:flex-row gap-2">
                    <button
                        onClick={() =>
                          handleResumeAction("download", application.resume)
                        }
                        className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        <a
                          href={application.resume} download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white no-underline"
                        >
                          Download Resume
                        </a>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {AllJobApplicationByUserId.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">
              No applications found
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
