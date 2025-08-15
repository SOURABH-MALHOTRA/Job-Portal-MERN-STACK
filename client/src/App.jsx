import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth/auth.js";
// Layouts & Components
import Auth from "./components/auth/auth.jsx";
import CommonJobPortalLayout from "./components/common-job-portal-layout/layout.jsx";
import JobSeekerLayout from "./components/job-seeker/Layout/index.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import AuthRegister from "./pages/auth/register.jsx";
import AuthLogin from "./pages/auth/login.jsx";
import JobCardRender from "./pages/job-card-render/index.jsx";
import PostJob from "./pages/job-creator/post-job/post-job.jsx";
import ApplyFormSelector from "./components/common/JobCategory-ApplyForm/jobcategoryformswitchcase.jsx";
import MyApplications from "./pages/job-seeker/My-Applications/index.jsx";
import Logout from "./components/common/Signout_User/index.jsx";
import JobCreatorHomePage from "./pages/job-creator/HomePage/index.jsx";
import { UserAllJobs } from "./pages/job-creator/AllUserJobs/index.jsx";
import ApplicantsForCreator from "./pages/job-creator/ApplicantsForCreator/index.jsx";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ToastContainer />
      <Routes>
        {/* 🌍 Public + shared layout */}
        <Route
          path="/"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <CommonJobPortalLayout />
            </Auth>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
          <Route path="jobs" element={<JobCardRender />} />
        </Route>

        {/* 👤 Job Seeker routes */}

        <Route path="/jobseeker" element={<JobSeekerLayout />}>
          <Route
            index
            element={
              <Auth isAuthenticated={isAuthenticated} user={user}>
                <HomePage />
              </Auth>
            }
          />
          <Route path="jobs" element={<JobCardRender />} />
          <Route
            path="applyform/:category/:jobId"
            element={
              <Auth isAuthenticated={isAuthenticated} user={user}>
                <ApplyFormSelector />{" "}
              </Auth>
            }
          />
          <Route path="myapplications" element={<MyApplications />} />
        </Route>
        <Route
          path="/signout"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <Logout />
            </Auth>
          }
        />
        {/* 🛠 Job Creator routes */}
        <Route path="/jobcreator" element={<CommonJobPortalLayout />}>
          <Route
            index
            element={
              <Auth isAuthenticated={isAuthenticated} user={user}>
                <JobCreatorHomePage />
              </Auth>
            }
          />
          <Route path="postjob" element={<PostJob />} />
          <Route path="jobcreated" element={<UserAllJobs />} />
          <Route path="applications" element={<ApplicantsForCreator/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
