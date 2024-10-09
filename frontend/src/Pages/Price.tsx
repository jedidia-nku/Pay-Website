import React from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';

const Price: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="pt-20 bg-white text-gray-800 min-h-screen">
      <header className="text-center py-10 bg-gray-50 shadow-sm">
        <h1 className="text-4xl font-bold">Simple, Fair Pricing</h1>
        <p className="mt-4 text-lg">Paystack only makes money when you do.</p>
      </header>

      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Pricing for Card Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Local Card Transactions</h3>
            <p className="text-4xl font-bold my-4">1.5%</p>
            <p>No upfront or monthly fees</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">International Card Transactions</h3>
            <p className="text-4xl font-bold my-4">3.8%</p>
            <p>Charge in KES or USD, settle in either currency</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">M-PESA Transactions</h3>
            <p className="text-4xl font-bold my-4">1.5%</p>
            <p>Settle into your M-PESA wallet</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">Transfer Fees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">M-PESA Wallet</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Transfers between KES 1 and KES 1,500: KES 20</li>
              <li>Transfers between KES 1,501 and KES 20,000: KES 40</li>
              <li>Transfers above KES 20,001: KES 60</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Bank Account Transfers</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Transfers between KES 1 and KES 10,000: KES 80</li>
              <li>Transfers between KES 10,001 and KES 50,000: KES 120</li>
              <li>Transfers above KES 50,000: KES 140</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 bg-gray-100 mt-16">
        <p>Ready to get started? <a href="https://paystack.com/signup" className="text-blue-600 hover:underline">Create a free account</a> in just 30 minutes.</p>
      </footer>
    </div>
    <Footer />
    </>
  );
};

export default Price;
