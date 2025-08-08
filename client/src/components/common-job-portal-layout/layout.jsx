import { Outlet } from "react-router-dom"
import JobPortalCommon from "../common/commonjobportal-Header.jsx";
import CommonJobPortalFooter from "../common/commonjobportal-Footer.jsx";
function CommonJobPortalLayout(){


    return (
<>
        <JobPortalCommon />
<Outlet/>
<CommonJobPortalFooter />
</>
    )
}
export default CommonJobPortalLayout;