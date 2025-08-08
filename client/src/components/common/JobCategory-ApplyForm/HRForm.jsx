import { useState } from "react";

function HRForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    experience: "",
    hrCertifications: "",
    interviewSkills: "",
    hiringTools: "",
    communicationSkills: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HR Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Apply for HR Role</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Full Name *</label>
        <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Phone *</label>
        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Resume (PDF) *</label>
        <input type="file" name="resume" accept=".pdf" required onChange={handleChange} className="w-full" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Years of Experience *</label>
        <input type="number" name="experience" required value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">HR Certifications (if any)</label>
        <input type="text" name="hrCertifications" value={formData.hrCertifications} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Interview Skills *</label>
        <input type="text" name="interviewSkills" required value={formData.interviewSkills} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Hiring Tools Knowledge</label>
        <input type="text" name="hiringTools" value={formData.hiringTools} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Communication Skills *</label>
        <input type="text" name="communicationSkills" required value={formData.communicationSkills} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Application
      </button>
    </form>
  );
}

export default HRForm;
