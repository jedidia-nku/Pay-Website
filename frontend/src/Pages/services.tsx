import React from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';


type Service = {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
};

const services: Service[] = [
    {
        title: 'Money Transfer',
        description: 'Money transfer has never been this easy, you can transfer money to your loved ones with our services.',
        imageUrl: '../../Money Transfer.jfif',
        buttonLabel: 'Enquire Now',
      },
  {
    title: 'Reload Forex Card',
    description: 'Flying for business work or for a vacation? Our team of expert professionals will surely suggest and book the right flight.',
    imageUrl: '../../Reload Forex Card.png', 
    buttonLabel: 'Enquire Now',
  },
  {
    title: 'Buy Foreign Currencies',
    description: 'We are reputed for providing hassle-free railway ticket booking services so you can only focus on your journey ahead.',
    imageUrl: '../../Buy Foreign Currencies.jpg', 
    buttonLabel: 'Enquire Now',
  },
  {
    title: 'Sell Foreign Currencies',
    description: 'We are engaged in providing excellent hotel reservation facilities for a wide range of hotels so you can enjoy the stay.',
    imageUrl: '../../Sell Foreign Currencies.jfif',
    buttonLabel: 'Enquire Now',
  },
  {
    title: 'Electricity Bill',
    description: 'We have a large fleet of cars to give on hire for outstation which are luxurious as well as economical for our clients.',
    imageUrl: '../../Electricity Bill.jfif',
    buttonLabel: 'Enquire Now',
  },
  {
    title: 'Internet Bill',
    description: 'Stuck somewhere with a different country’s currency. We are a one-stop solution for all your forex needs.',
    imageUrl: '../../Internet Bill.jfif', 
    buttonLabel: 'Enquire Now',
  },

];

const Services: React.FC = () => {
  return (
    <>
    <Navbar />
    <section className="py-12 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-green-400 hover:bg-green-600 text-gray-800 font-semibold py-2 px-4 rounded-md">
                {service.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Services;
