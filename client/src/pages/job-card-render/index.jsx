import JobCardList from "@/components/common/jobcardlist";
import React, { useState } from 'react';
import { useSelector } from "react-redux";

function JobCardRender() {
    
      const {jobPosts} = useSelector((state) => state.jobCreator);
      
    return(
        <>
                <JobCardList jobPosts={jobPosts}/>

        </>
    )
}
export default JobCardRender;