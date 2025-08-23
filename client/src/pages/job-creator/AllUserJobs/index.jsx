import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobByUserId } from "@/store/job-creator/index.js";
import { Briefcase, Mail, MapPin, Clock } from "lucide-react";

export const UserAllJobs = () => {
  const getCompanyLogo = (company) => {
    const logos = {
      TechCorp: "🏢",
      StartupXYZ: "🚀",
      DesignHub: "🎨",
      DataFlow: "📊",
      WebTech: "⚛️",
      CloudOps: "☁️",
      default: "🏢",
    };
    return logos[company] || logos["default"];
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Engineering: "⚙️",
      Marketing: "📈",
      Sales: "🤝",
      "Human Resources": "👥",
      default: "💼",
    };
    return icons[category] || icons["default"];
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (user?.id) {
      dispatch(getJobByUserId(user.id));
    }
  }, [user, dispatch]);

  const { Userjobs } = useSelector((state) => state.jobCreator);
  
  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-4 md:p-6 mt-18">
      {/* Mobile-first grid with proper responsive breakpoints */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Userjobs ? Userjobs.map((job) => (
          <div
            key={job._id}
            className="group relative bg-white hover:bg-slate-50 shadow-md hover:shadow-2xl rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-4 sm:p-6 pb-3 sm:pb-4">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-sm flex-shrink-0">
                    {getCompanyLogo(job.company)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {job.title}
                    </h3>
                    <p className="text-slate-600 font-medium text-sm sm:text-base line-clamp-1">
                      {job.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location and Job Type - Stack on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  <span className="text-xs sm:text-sm font-medium line-clamp-1">
                    {job.location}
                  </span>
                </div>
                <span
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold self-start ${
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
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex items-center bg-slate-100 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2">
                  <span className="text-base sm:text-lg mr-1.5 sm:mr-2">
                    {getCategoryIcon(job.jobCategory)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    {job.jobCategory}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-2">
                {job.description}
              </p>
            </div>

            {/* Skills Section */}
            <div className="px-4 sm:px-6 pb-3 sm:pb-4">
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Required Skills
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2.5 sm:p-3 border border-blue-100">
                  <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 font-medium">
                    {job.skills}
                  </p>
                </div>
              </div>
            </div>

            {/* Job Details - Always stack on mobile */}
            <div className="px-4 sm:px-6 pb-3 sm:pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2.5 sm:mr-3">
                    <span className="text-green-600 text-sm">💰</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      Salary
                    </p>
                    <p className="font-bold text-sm text-slate-800">
                      ₹{job.salary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2.5 sm:mr-3">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      Experience
                    </p>
                    <p className="font-bold text-sm text-slate-800">
                      {job.experience} years
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Email */}
              <div className="flex items-center text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 bg-slate-50 rounded-lg p-2.5 sm:p-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-slate-400 flex-shrink-0" />
                <span className="text-blue-600 font-medium truncate">
                  {job.contactEmail}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  <span>Apply before: </span>
                  <span className="font-semibold text-red-600 ml-1">
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600/3 to-indigo-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        )) : (
          <div className="col-span-full flex items-center justify-center py-12">
            <div className="text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No Jobs Found</h3>
              <p className="text-slate-500 text-sm">You haven't created any job postings yet.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};