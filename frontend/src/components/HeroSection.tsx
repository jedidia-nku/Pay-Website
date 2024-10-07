// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Section */}
        <div className="lg:w-1/2 px-6">
          <h1 className="text-4xl font-bold">
            Business payments <span className="text-green-400">for</span> today's global <span className="text-yellow-400">economy</span>
          </h1>
          <p className="mt-6 text-lg">
            SawaPay is the Embedded Finance Platform designed for the Gig Economy Workforce and Businesses in Africa. 
            We offer two products such as Payroll Management System to companies and Embedded Financial Services to Gig Workers and Employees across Africa.
          </p>
          <div className="mt-8">
            <button className="bg-green-400 text-gray-900 font-semibold py-2 px-4 rounded-md mr-4">
              Contact sales
            </button>
            <button className="flex items-center bg-gray-700 text-white font-semibold py-2 px-4 rounded-md">
              <span>Explore more</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="grid grid-cols-2 gap-6">
            
            {/* Image of the phone */}
            <div className="col-span-2 flex justify-center">
              <img src="/path/to/your-phone-image.png" alt="Phone showing SawaPay app" className="w-48" />
            </div>

            {/* Stats 1 */}
            <div className="bg-blue-100 p-6 rounded-md flex flex-col items-center text-gray-900">
              <h2 className="text-3xl font-bold">600k+</h2>
              <p className="mt-2 text-lg">Businesses</p>
            </div>

            {/* Stats 2 */}
            <div className="bg-yellow-400 p-6 rounded-md flex flex-col items-center text-gray-900">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold">★★★★</span>
                <span className="text-2xl">☆</span>
              </div>
              <p className="mt-2 text-lg">Satisfied Businesses</p>
            </div>

            {/* Stats 3 */}
            <div className="bg-gray-800 p-6 rounded-md flex flex-col items-center text-white col-span-2">
              <h2 className="text-3xl font-bold">$10B+</h2>
              <p className="mt-2 text-lg">Benefits</p>
              <div className="w-full h-32 mt-4 relative">
                <div className="absolute bottom-0 left-0 h-1 bg-white w-4/5"></div>
                <div className="absolute top-0 right-0 h-1 bg-white w-1/5"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
