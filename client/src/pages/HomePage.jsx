import React, { use, useState } from 'react';
import { Search, MapPin, BriefcaseBusiness, Users, TrendingUp, Star, ChevronRight, Play, Building, DollarSign,Mail } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllJobs } from '@/store/job-creator';
import { useEffect } from 'react';
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getAllJobs()) }, [dispatch])
    const { jobPosts } = useSelector((state) => state.jobCreator);
 
    const getCategoryIcon = (category) => {
    const icons = {
      'Engineering': '⚙️',
      'Marketing': '📈',
      'Sales': '🤝',
      'Human Resources': '👥',
      
      'default': '💼'
    };
    return icons[category] || icons['default'];
  };
  const getCompanyLogo = (company) => {
    const logos = {
      'TechCorp': '🏢',
      'StartupXYZ': '🚀',
      'DesignHub': '🎨',
      'DataFlow': '📊',
      'WebTech': '⚛️',
      'CloudOps': '☁️',
      'default': '🏢'
    };
    return logos[company] || logos['default'];
  };

  const categories = [
    { name: 'Engineering', count: '2,450', icon: '⚙️', color: 'bg-blue-500' },
    { name: 'Marketing', count: '1,230', icon: '📈', color: 'bg-green-500' },
    { name: 'Sales', count: '1,120', icon: '🤝', color: 'bg-red-500' },
    { name: 'Human Resources', count: '540', icon: '👥', color: 'bg-pink-500' }
  ];



  const cities = [
    { name: 'Mumbai', jobs: '3,240' },
    { name: 'Bangalore', jobs: '2,890' },
    { name: 'Delhi', jobs: '2,456' },
    { name: 'Pune', jobs: '1,678' },
    { name: 'Hyderabad', jobs: '1,543' },
    { name: 'Chennai', jobs: '1,234' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ">
      
      

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center mt-5  ">
          <div className="mb-8 ">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dream Job</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Connect with top companies and discover opportunities that match your skills and aspirations
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job title, skills, or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-slate-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15K+</div>
              <div className="text-slate-600">Job Creator </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">200K+</div>
              <div className="text-slate-600">Job Seekers</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Jobs</h2>
            <p className="text-slate-600 text-lg">Hand-picked opportunities from top companies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPosts.map((job) => (
              <div key={job._id} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group">
                <div className="flex items-start justify-between mb-4">
                  {/* <div className="text-3xl">{job.logo}</div> */}
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-2 text-xs rounded-full font-medium ${
                      job.jobType === 'Full-time' ? 'bg-green-100 text-green-600' :
                      job.jobType === 'Remote' ? 'bg-blue-100 text-blue-600' :
                      job.jobType === 'Hybrid' ? 'bg-purple-100 text-purple-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {job.jobType}
                    </span>
                  </div>
                </div>
                 <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {getCompanyLogo(job.company)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                 
                
                <div className="flex items-center text-sm text-slate-500 mb-3 mt-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
               <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 mb-2">
                    <span className="text-lg mr-2">{getCategoryIcon(job.jobCategory)}</span>
                    <span className="text-sm font-medium text-slate-700">{job.jobCategory}</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-2">
                  {job.description}
                </p>
                <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-600 mb-1">Required Skills:</p>
                  <p className="text-sm font-medium text-slate-700 line-clamp-2">{job.skills}</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                    <span className="font-semibold text-slate-700">{job.salary}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{job.experience} years</span>
                </div>
                 <div className="flex items-center text-sm text-slate-600 mb-4 bg-slate-50 rounded-lg p-3">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="text-blue-600 font-medium">{job.contactEmail}</span>
                </div>
                <div className="text-xs text-slate-500 mb-4">
                  Apply by: <span className="text-red-600 font-medium">
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Browse by Category</h2>
            <p className="text-slate-600 text-lg">Find jobs in your field of expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">{categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center text-3xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-slate-500 text-lg">{category.count} jobs available</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies */}
     

      {/* Cities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Jobs by Location</h2>
            <p className="text-slate-600 text-lg">Explore opportunities in top cities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-slate-600">{city.jobs} jobs available</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals who found their perfect match</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors font-semibold">
              Create Account
            </button>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;