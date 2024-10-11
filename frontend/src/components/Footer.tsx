
const Footer: React.FC = () => {
    return (
      <>
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Newsletter Subscription */}
          <div >
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="mb-4">Join the fast-growing SawaPay and SawaPay community of users.</p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full py-2 px-4 rounded-lg focus:outline-none text-black"
              />
              <button
                type="submit"
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
              >
                <span className="material-icons">arrow_forward</span>
              </button>
            </form>
            <div className="mt-4">
              <input type="checkbox" id="recaptcha" name="recaptcha" />
              <label htmlFor="recaptcha" className="ml-2">
                I'm not a robot
              </label>
            </div>
          </div>

          {/* Products Links */}
          <div className=" flex justify-around">
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">SawaPay Payroll</a></li>
              <li><a href="#" className="hover:underline">SawaPay Finance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">SawaPay</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our story</a></li>
              <li><a href="#" className="hover:underline">Our team</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Help center</a></li>
            </ul>
          </div>
          
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white"><i className="fab fa-tiktok"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        {/* Branding */}
        <div className="text-green-500 text-xl font-bold mt-12">
          <span className="text-yellow-500">Pulse</span>Pay
        </div>
      </div>

    </section>
          <div className="hidden bg-white lg:h-10 lg:flex lg:gap-12 lg:w-full lg:justify-around lg:text-gray-800">
          <p>Private Policy</p>
          <p>2024 PulsePay Inc</p>
          <p>Copyright 2024 PulsePay, All Rights reserved</p>
        </div>
        </>
    )
}

export default Footer;