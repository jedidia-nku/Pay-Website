import React from 'react';
import Navbar from '../components/navBar';

const QuickLinksPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="QuickLinksPage">
      {/* Header Section */}
      <header className="bg-blue-50 py-12 text-center">
        <h1 className="text-4xl font-bold">Quick Links</h1>
        <p className="text-lg mt-4">Digital payments, without a website</p>
      </header>

      {/* First Feature Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto flex items-center space-x-8">
          <div className="w-1/2">
            <img
              src="/path-to-your-image-1.jpg"
              alt="No website but still want to get paid?"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              No website but still want to get paid?
            </h2>
            <p className="text-lg">
              Create a Quick Link that allows your clients to pay you through SawaPay in seconds.
            </p>
            <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-lg">Learn More</button>
          </div>
        </div>
      </section>

      {/* Second Feature Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex items-center space-x-8 flex-row-reverse">
          <div className="w-1/2">
            <img
              src="/path-to-your-image-2.jpg"
              alt="Payments as simple as a message"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Payments as simple as a message
            </h2>
            <ul className="list-disc list-inside">
              <li>No website needed</li>
              <li>Create in seconds</li>
              <li>Mobile optimized</li>
              <li>Easy reconciliation</li>
            </ul>
            <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-lg">Learn More</button>
          </div>
        </div>
      </section>

      {/* How to Use Quick Links Section */}
      <section className="bg-green-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">How you use Quick Links</h2>
        <div className="container mx-auto grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <p>Your customer orders from you</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <p>You generate a Quick Link through SawaPay</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <p>Your SawaPay account is instantly credited once your customer pays</p>
          </div>
        </div>
        <div className="mt-16">
          <img src="/path-to-your-mobile-image.jpg" alt="SawaPay mobile" className="mx-auto" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} SawaPay. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default QuickLinksPage;
