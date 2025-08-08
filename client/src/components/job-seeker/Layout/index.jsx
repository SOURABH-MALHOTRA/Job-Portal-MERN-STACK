import { Outlet } from "react-router-dom"
import JobSeekerHeader from "../Header/index.jsx";
import CommonJobPortalFooter from "@/components/common/commonjobportal-Footer.jsx";
function JobSeekerLayout(){


    return (
<>
        <JobSeekerHeader/>
<Outlet/>
<CommonJobPortalFooter />
</>
    )
}
export default JobSeekerLayout;