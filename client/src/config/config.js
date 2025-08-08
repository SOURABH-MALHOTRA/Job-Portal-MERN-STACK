export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
    {
    name: "role",
    label: "Role",
    placeholder: "Select your role",
    componentType: "select",
    options: [
      { id: "Job Seeker", label: "Job Seeker" },
      { id: "Job Creator", label: "Job Creator" },
    ],
  },
];


export const loginFormControls = [
 
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  }
];
 const PostJobFormControls = [
  {
    name: "company",
    label: "Company",
    placeholder: "Enter your email",
    componentType: "input",
    type: "text",
  },
   {
    name: "jobCategory",
    label: "Job Category",
    placeholder: "Select job category",
    componentType: "select",
    options: [
      { id: "Engineering", label: "Engineering" },
      { id: "Marketing", label: "Marketing" },
      { id: "Sales", label: "Sales" },
    
      { id: "Human Resources", label: "Human Resources" },
    ],
  },
  {
    name: "title",
    label: "Title",
    placeholder: "Enter Job Title",
    componentType: "input",
    type: "text",
  },
  
 
   
  {
    name: "description",
    label: "Description",
    placeholder: "Enter Job Description",
    componentType: "textarea",
  },
   {
    name: "jobType",
    label: "Job Type",
    placeholder: "Select Job Type",
    componentType: "select",
    options: [
      { id: "Full-time", label: "Full-time" },
      { id: "Part-time", label: "Part-time" },
      { id: "Internship", label: "Internship" },
      { id: "Remote", label: "On-site" },
      { id: "Hybrid", label: "Hybrid" }
    ],
  },
  {
    name: "skills",
    label: "Skills",
    placeholder: "Enter required skills (comma separated)",
    componentType: "input",
    type: "text",
  },
  {
    name: "salary",
    label: "Salary",
    placeholder: "Enter expected salary",
    componentType: "input",
    type: "number",
  },
  {
    name: "experience",
    label: "Experience",
    placeholder: "Enter required experience (in years)",
    componentType: "input",
    type: "number",
  },
   {
    name: "location",
    label: "Location",
    placeholder: "Enter your location",
    componentType: "input",
    type: "text",
  },
  {
    name: "contactEmail",
    label: "Contact Email",
    placeholder: "Enter contact email for applications",
    componentType: "input",
    type: "email",
  },
  {
    name: "applicationDeadline",
    label: "Application Deadline",
    placeholder: "Select application deadline",
    componentType: "input",
    type: "date",
  },
 
 

];
export default PostJobFormControls;