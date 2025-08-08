import CommonForm from "@/components/common/form";
import PostJobFormControls from "@/config/config.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createJobPost } from "@/store/job-creator/index.js";
import { getAllJobs } from "@/store/job-creator/index.js";
function PostJob() {   
    const initialState = {
        company: "",
        jobCategory: "",                            
        title: "",                     
        description: "",        
        jobType: "",      
        skills: "",
        salary: "",    
        experience: "",
        location: "",
        contactEmail: "",
        applicationDeadline: "",
    }         
    
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();             

        const jobData = {                       
            ...formData
           }
                                                                           

        dispatch(createJobPost(jobData)).then((data) => {
            if (data?.payload?.success) {           


                toast.success(data?.payload?.message || "Job posted successfully");
                dispatch(getAllJobs())         

                navigate("/jobs"); // Redirect to the jobs page after successful post
            }               else {
                toast.error(data?.payload?.message || "Failed to post job");                                                                        

            }                   
    }   )};                          



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 w-screen">
            {/* Header Section */}
            <div className="bg-white shadow-lg border-b border-gray-100 ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 sm:px-8 py-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Job Details</h2>
                        <p className="text-blue-100 mt-1 text-sm sm:text-base">Fill in the information below to post your job listing</p>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="space-y-6">
                            {/* Progress Indicator */}
                            <div className="flex items-center justify-center mb-8">
                                <div className="flex items-center space-x-2">
                                </div>
                            </div>

                            {/* Form Container */}
                            <div className="relative ">
                                
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-50 blur-xl "></div>
                                
                                {/* Form Wrapper */}
                                <div className="relative bg-gray-50  rounded-xl p-6
                                 sm:p-8 border border-gray-100">
                                    <CommonForm
                                        formControls={PostJobFormControls}
                                        formData={formData}
                                        setFormData={setFormData}
                                        onSubmit={onSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Your job posting is secure and protected</span>
                            </div>
                            <div className="text-xs text-gray-500">
                                Need help? <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Contact Support</a>
                            </div>
                        </div>
                    </div>
                </div>

               
               
            </div>
        </div>
    );
} 

export default PostJob;