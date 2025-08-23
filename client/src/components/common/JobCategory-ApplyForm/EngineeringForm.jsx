import { useState } from "react";
import { useSelector } from "react-redux";
import { CreateApplicant } from "@/store/job-seeker/job-application-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

function EngineeringForm({ category, jobId }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [ResumeUploadUrl, setResumeUploadUrl] = useState("");

  const [formData, setFormData] = useState({
    userId: user.id,
    jobId: jobId,
    role: category,
    fullName: "",
    github: "",
    resume: null,
    experience: "",
    cpi: "",
    tenthMarks: "",
    twelfthMarks: "",
    branch: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (formData.resume !== null) uploadResumeToCloudinary();
  }, [formData.resume]);

  async function uploadResumeToCloudinary() {
    const data = new FormData();
    data.append("my_file", formData.resume);
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/job-seeker/upload-resume`,
      data
    );
    console.log("Cloudinary Response:", response.data);

    if (response?.data?.success) {
      setResumeUploadUrl(response.data.result.secure_url);
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ResumeUploadUrl) {
      toast.error("Please wait until resume upload completes");
      return;
    }

    dispatch(
      CreateApplicant({
        ...formData,
        resume: ResumeUploadUrl, // only send URL
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        setFormData({
          userId: user.id,
          jobId: jobId,
          role: category,
          fullName: "",
          github: "",
          resume: null,
          experience: "",
          cpi: "",
          tenthMarks: "",
          twelfthMarks: "",
          branch: "",
          email: "",
          phone: "",
        });
        setResumeUploadUrl("");
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-3 sm:p-6 lg:p-8 mt-8 pt-6">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Engineering Application
                </h2>
                <p className="text-blue-100 text-sm sm:text-base mt-1">
                  Fill out the form to apply for this engineering position
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              
              {/* Personal Information Section */}
              <div className="space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Personal Information
                  </h3>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* GitHub */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    GitHub Profile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="github"
                    required
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                {/* Resume */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Resume (PDF) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf"
                      required
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    />
                  </div>
                  {ResumeUploadUrl && (
                    <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Resume uploaded successfully!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Professional & Academic Information Section */}
              <div className="space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Professional & Academic Details
                  </h3>
                </div>

                {/* Experience */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="experience"
                    required
                    min="0"
                    max="50"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="0"
                  />
                </div>

                {/* Branch */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    Branch/Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="Computer Science, Mechanical, etc."
                  />
                </div>

                {/* CPI */}
                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                    CPI/CGPA <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cpi"
                    required
                    value={formData.cpi}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="8.5 (out of 10)"
                  />
                </div>

                {/* Academic Marks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                      10th Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tenthMarks"
                      required
                      value={formData.tenthMarks}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="85%"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-slate-700">
                      12th Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="twelfthMarks"
                      required
                      value={formData.twelfthMarks}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="90%"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                disabled={!ResumeUploadUrl}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Submit Application</span>
              </button>
              
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EngineeringForm;