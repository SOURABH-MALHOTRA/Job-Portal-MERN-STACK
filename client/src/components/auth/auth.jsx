import { Navigate, useLocation } from "react-router-dom";

function Auth({ isAuthenticated, user, children }) {
  const location = useLocation();


  if (location.pathname === "/postjob") {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (user?.role !== "Job Creator") {
    return <Navigate to="/" />;
  }
}

  if (
    !isAuthenticated &&
    !(location.pathname === "/" ||
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")||
        location.pathname.includes("/jobs")
    )
  ) {
    return <Navigate to="/" />;
  }


  if (
    !isAuthenticated &&
    (location.pathname.includes("/jobseeker"))
  ) {
    return <Navigate to="/" />;
  }


  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "Job Creator") {
      return <Navigate to="/jobcreator" />;
    } 
    else if(user?.role === "Job Seeker"){
      return <Navigate to="/jobseeker" />;
    }
    
  }

  if (
    isAuthenticated &&
    user?.role !== "Job Seeker" &&
    location.pathname.includes("jobseeker")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // if (
  //   isAuthenticated &&-
  //   user?.role === "admin" &&
  //   location.pathname.includes("shop")
  // ) {
  //   return <Navigate to="/admin/dashboard" />;
  // }

  return <>{children}</>;
}

export default Auth;