import { useState } from "react";

function EngineeringForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    github: "",
    resume: null,
    experience: "",
    cpi: "",
    tenthMarks: "",
    twelfthMarks: "",
    branch: "",
    email: "",
    phone: "",
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
    console.log("Form Data:", formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Apply for Engineering Role</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Full Name *</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">GitHub Profile *</label>
        <input
          type="url"
          name="github"
          required
          value={formData.github}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Resume (PDF) *</label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          required
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Years of Experience *</label>
        <input
          type="number"
          name="experience"
          required
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Branch *</label>
        <input
          type="text"
          name="branch"
          required
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">CPI *</label>
        <input
          type="text"
          name="cpi"
          required
          value={formData.cpi}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">10th Percentage *</label>
        <input
          type="text"
          name="tenthMarks"
          required
          value={formData.tenthMarks}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">12th Percentage *</label>
        <input
          type="text"
          name="twelfthMarks"
          required
          value={formData.twelfthMarks}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
}

export default EngineeringForm;
