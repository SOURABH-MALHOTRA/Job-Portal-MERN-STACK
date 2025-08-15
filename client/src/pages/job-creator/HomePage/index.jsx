import React, { useState } from 'react';
import { Users, Briefcase, TrendingUp, Check, Star, ArrowRight, Menu, X, Target, Clock, Shield, Zap, Building2, Award, Search } from 'lucide-react';

export default function JobCreatorHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Candidate Matching",
      description: "Our system matches qualified candidates to your job requirements efficiently"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Hiring Process",
      description: "Streamline your recruitment with our simple tools and reduce time-to-hire"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Candidates",
      description: "Access to verified professional candidates across various industries"
    }
  ];

  const testimonials = [
    {
      name: "Demo User",
      company: "Sample Company",
      role: "HR Manager",
      content: "This platform looks clean and easy to use for posting jobs.",
      rating: 5
    },
    {
      name: "Test User",
      company: "Example Corp",
      role: "Recruiter",
      content: "Simple interface makes job management straightforward.",
      rating: 5
    },
    {
      name: "Project Demo",
      company: "Demo Solutions",
      role: "Team Lead",
      content: "Well-designed platform for connecting employers and candidates.",
      rating: 5
    }
  ];

  const stats = [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
   

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-25">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Top Talent
              <span className="text-blue-600 block">In Record Time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with India's best professionals. Our platform helps you find, 
              screen, and hire the perfect candidates faster than traditional methods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center">
                Post Your First Job Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
           
            </div>

            <div className="text-sm text-gray-600">
              <span className="inline-flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Completely free forever
              </span>
              <span className="mx-4">•</span>
              <span className="inline-flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Setup in 2 minutes
              </span>
              <span className="mx-4">•</span>
              <span className="inline-flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                No hidden costs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where Great Careers Begin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between talented professionals and forward-thinking companies. 
              Your next great hire or dream job is just a click away.
            </p>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Hire Better
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools and features designed to make your recruitment process efficient and effective
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy Job Posting</h4>
                <p className="text-gray-600 text-sm">Post jobs in under 2 minutes with our simple interface</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Search className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Search Candidates</h4>
                <p className="text-gray-600 text-sm">Browse through candidate profiles by skills and experience</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Platform</h4>
                <p className="text-gray-600 text-sm">Clean interface designed for efficient hiring process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything is Free Forever
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access all premium features at no cost. We believe in empowering businesses to grow without barriers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border-2 border-green-500 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Always Free
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Complete Platform</h3>
                <div className="flex items-end justify-center mb-4">
                  <span className="text-5xl font-bold text-green-600">₹0</span>
                  <span className="text-gray-600 ml-2 text-xl">forever</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited job postings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Candidate matching system</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Search candidates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Resume downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Application management</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Email notifications</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Mobile-friendly interface</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">No hidden charges ever</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
                  Get Started Now - It's Free!
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              No credit card required • No time limits • No premium upgrades
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Employers Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real success stories from companies who transformed their hiring
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                    <p className="text-blue-600 font-medium">{testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start using JobCreator to connect with talented professionals. 
            Get started today - it's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get Started Free
            </button>
           
          </div>
          <p className="text-blue-200 text-sm mt-4">100% Free • No time limits • All features included</p>
        </div>
      </section>

      
   
    </div>
  );
}
