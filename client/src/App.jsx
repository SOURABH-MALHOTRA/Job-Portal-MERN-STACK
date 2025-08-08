import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PostJob from "./pages/job-creator/post-job/post-job.jsx";
import JobCardRender from "./pages/job-card-render/index.jsx";
import Auth from "./components/auth/auth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth/auth.js";
import CommonJobPortalLayout from "./components/common-job-portal-layout/layout.jsx";
import AuthRegister from "./pages/auth/register.jsx";
import AuthLogin from "./pages/auth/login.jsx";
import ApplyFormSelector from "./components/common/JobCategory-ApplyForm/jobcategoryformswitchcase.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobSeekerLayout from "./components/job-seeker/Layout/index.jsx";
function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ToastContainer />
      <Routes>
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
          <Route path="postjob" element={<PostJob />} />
          <Route path="jobs" element={<JobCardRender />} />
          <Route path="ApplyForm/:category" element={<ApplyFormSelector />} />
        </Route>

        <Route
          path="/jobseeker"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <JobSeekerLayout />
              
             </Auth>
          }
        >
           <Route index element={<HomePage />} />
           <Route path="jobs" element={<JobCardRender />} />

         {/* <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
          <Route path="postjob" element={<PostJob />} />
          <Route path="jobs" element={<JobCardRender />} />
          <Route path="ApplyForm/:category" element={<ApplyFormSelector />} /> */}
        </Route>
        {/* <Route
          path="/auth"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </Auth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </Auth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <Auth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </Auth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
