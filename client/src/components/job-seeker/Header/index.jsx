import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { BriefcaseBusiness } from 'lucide-react';
// import JobCardList from './jobcardlist';
const CommonJobPortal = [
  { id: "Home", label: 'Home', href: '/jobseeker' },
  { id: "Jobs", label: 'Jobs', href: '/jobseeker/jobs' },
  { id: "My Applications", label: 'My Applications', href: '/jobseeker/myapplications' },
  { id: "Sign Out", label: 'Sign Out', href: '/signout' }
];

const JobSeekerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const {jobPosts} = useSelector((state) => state.jobCreator);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-17">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm"><BriefcaseBusiness /></span>
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              JobNest
              <span className="text-blue-400 text-sm ml-1"></span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {CommonJobPortal.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-white hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
         <Avatar className="bg-white w-9 h-9">
            <AvatarFallback className="bg-white text-black font-extrabold">
              SM
            </AvatarFallback>
          </Avatar>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-slate-700 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900">
            {CommonJobPortal.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}

    </nav>
    {/* <JobCardList jobPosts={jobPosts}/> */}
    </>
  );
};

// Demo content to show the header in action


export default JobSeekerHeader; ;