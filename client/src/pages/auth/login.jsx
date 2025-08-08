import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config/config.js";
import { loginUser } from "../../store/auth/auth.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import { useSelector } from "react-redux";



function AuthLogin() {
  const initialState = {
  email: "",
  password: "",
};
const dispatch= useDispatch();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState(initialState);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message || "Login successful");
        if (user?.role === "Job Creator" && isAuthenticated=== true) {
          navigate("/jobcreator");
        } else if (user?.role === "Job Seeker" && isAuthenticated=== true) {
          navigate("/jobseeker");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.payload?.message || "Login failed");
        
      }
    });
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 w-150 pt-17">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Compact form card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6">
          {/* Header section */}
          <div className="text-center space-y-2">
            {/* Logo/Icon */}
            <div className="mx-auto w-15 h-15 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form section */}
          <div className="mt-4 space-y-4">
            <CommonForm
              formControls={loginFormControls}
              buttonText={"Sign In"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>

          {/* Register link section */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Link
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
                to="/auth/register"
              >
                Create new account
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Footer text */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Protected by industry-standard security measures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;