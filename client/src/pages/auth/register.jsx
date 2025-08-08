import CommonForm from "../../components/common/form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerFormControls } from "../../config/config.js";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth/auth.js"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function AuthRegister() {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const initialState = {
  userName: "",
  email: "",
  password: "",
  role: "",
};
  const [formData, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
                toast.success(data?.payload?.message || "Registration successful");

        navigate("/login");
      } else {
        toast.error(data?.payload?.message || "Registration failed");
      }
    });
  }

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center w-150 pt-17">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-400 to-teal-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container - adjusted height and padding */}
      <div className="relative w-full max-w-md  ">
        {/* Compact form card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6">
          {/* Header section - more compact */}
          <div className="text-center space-y-2">
            <div className="mx-auto w-15 h-15 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Create New Account
            </h1>
            <p className="text-gray-600 text-sm">
              Join us today and start your journey
            </p>
          </div>

          {/* Form section - tighter spacing */}
          <div className="mt-4 space-y-4">
            <CommonForm
              formControls={registerFormControls}
              buttonText={"Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>

          {/* Login link section - compact */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Link
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
                to="/auth/login"
              >
                Sign in to your account
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Footer text - smaller */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-indigo-600 hover:underline">Terms</a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;