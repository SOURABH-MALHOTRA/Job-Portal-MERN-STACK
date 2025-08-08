import { useState } from "react";

function MarketingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    resume: null,
    experience: "",
    skills: "",
    certifications: "",
    campaignExperience: "",
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
    console.log("Marketing Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Apply for Marketing Role</h2>

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
        <label className="block mb-1 text-sm font-medium">Portfolio / Website</label>
        <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full p-2 border rounded" />
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
        <label className="block mb-1 text-sm font-medium">Key Marketing Skills *</label>
        <input type="text" name="skills" required value={formData.skills} onChange={handleChange} className="w-full p-2 border rounded" placeholder="SEO, Content Marketing, etc." />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Certifications (if any)</label>
        <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Previous Campaign Experience</label>
        <textarea name="campaignExperience" value={formData.campaignExperience} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Application
      </button>
    </form>
  );
}

export default MarketingForm;
