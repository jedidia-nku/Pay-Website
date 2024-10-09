import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navBar';


const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
      {/* Hero Section */}
      <section className="bg-white pt-32">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Story</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover the journey of PulsePay and how we empower businesses and individuals through Money transfer technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value Cards */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900">Integrity</h2>
              <p className="mt-2 text-gray-500">
                We believe in transparency and honesty in all our dealings, ensuring trust and reliability for all our stakeholders.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900">Innovation</h2>
              <p className="mt-2 text-gray-500">
                At Mudupay, innovation drives our progress, allowing us to bring the latest and most effective solutions to the market.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900">Customer-Centric</h2>
              <p className="mt-2 text-gray-500">
                Our customers are at the heart of everything we do, and we strive to provide exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 max-w-2xl text-xl text-indigo-200 lg:mx-auto">
              Want to learn more about our story? Reach out to us for any inquiries or to partner with us in making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
