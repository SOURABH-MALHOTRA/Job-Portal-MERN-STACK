import { Navigate, useLocation } from "react-router-dom";

function Auth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const path = location.pathname.toLowerCase(); // ✅ case-insensitive comparison

  const publicRoutes = ["/", "/jobs", "/login", "/register"];
  const jobSeekerRoutes = [
    "/jobseeker",
    "/jobseeker/jobs",
    "/jobseeker/myapplications"
  ];
  const jobCreatorRoutes = [
    "/jobcreator",
    "/jobcreator/postjob",
    "/jobcreator/jobcreated",
    "/jobcreator/applications"
  ];

  // 0️⃣ Non-logged in + restricted routes
  if (
    !isAuthenticated &&
    (
      path === "/jobcreator/postjob" ||
      path.startsWith("/jobseeker/applyform/"))
  ) {
    return <Navigate to="/login" replace />;
  }

  // 1️⃣ Non-logged in → only public routes allowed
  if (!isAuthenticated) {
    if (!publicRoutes.includes(path)) {
      return <Navigate to="/" replace />;
    }
  }

  // 2️⃣ Job Seeker login
  if (isAuthenticated && user?.role?.toLowerCase() === "job seeker") {
    // Block job creator routes
    if (jobCreatorRoutes.includes(path)) {
      return <Navigate to="/jobseeker" replace />;
    }
    // Allow only own routes + ApplyForm
    if (
      !jobSeekerRoutes.includes(path) &&
      !path.startsWith("/jobseeker/applyform/")
    ) {
      if (publicRoutes.includes(path) || path.startsWith("/applyform/")) {
        return <Navigate to="/jobseeker" replace />;
      }
    }
  }

  // 3️⃣ Job Creator login
  if (isAuthenticated && user?.role?.toLowerCase() === "job creator") {
    // Block job seeker routes
    if (
      jobSeekerRoutes.includes(path) ||
      path.startsWith("/jobseeker/applyform/")
    ) {
      return <Navigate to="/jobcreator" replace />;
    }
    // Allow only own routes
    if (!jobCreatorRoutes.includes(path)) {
      if (publicRoutes.includes(path)) {
        return <Navigate to="/jobcreator" replace />;
      }
    }
  }

  // 4️⃣ Already logged in → /login or /register redirect to dashboard
  if (isAuthenticated && (path === "/login" || path === "/register")) {
    if (user?.role?.toLowerCase() === "job seeker") {
      return <Navigate to="/jobseeker" replace />;
    }
    if (user?.role?.toLowerCase() === "job creator") {
      return <Navigate to="/jobcreator" replace />;
    }
  }

  return <>{children}</>;
}

export default Auth;
