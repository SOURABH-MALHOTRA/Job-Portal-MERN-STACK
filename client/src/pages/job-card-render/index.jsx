import JobCardList from "@/components/common/jobcardlist";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux" 
import { getAllJobs } from "@/store/job-creator";
import { useEffect } from "react";
function JobCardRender() {
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);
   
  const { jobPosts } = useSelector((state) => state.jobCreator);
 
  return (
    <>
      <JobCardList jobPosts={jobPosts} />
    </>
  );
}
export default JobCardRender;
