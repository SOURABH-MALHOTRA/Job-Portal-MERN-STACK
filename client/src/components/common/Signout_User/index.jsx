import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();  // Call the hook here

  useEffect(() => {
    dispatch(logoutUser())  // Call the action creator to get the action
      .then((data) => {
        if (data?.payload?.success) {
          toast.success(data?.payload?.message || "Logout successful");
            navigate("/")
        }
      });
  }, [dispatch,navigate]);

  return <>
    
  </>;  // Include the ToastContainer somewhere to show toast
}

export default Logout;
