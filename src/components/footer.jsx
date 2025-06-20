import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(assets/img/bg/pattern-bg.png)' }}
      >
        {/* Newsletter Subscription */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:w-1/3">
                <h3 className="text-xl font-semibold">
                  Subscribe Our Newsletter <br />
                  To Get More Updates
                </h3>
              </div>
              <form className="flex flex-wrap gap-4 lg:w-2/3">
                <div className="relative w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="e.g. John William"
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full"
                  />
                  <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="info@webmail.com"
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full"
                  />
                  <i className="fa-solid fa-envelope-open absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Social */}
            <div>
              <img src="assets/img/logo/logo-5.png" alt="logo" className="mb-4" />
              <p className="mb-4 text-gray-700">
                A farm is a plot of land that is used to grow crops & to raise livestock.
              </p>
              <div className="flex gap-4 text-xl text-green-600">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-behance-square" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
              </div>
            </div>

            {/* Services List */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Agriculture Foods',
                  'Eggs & Meats',
                  'Organic Vegetables',
                  'Fresh Milk',
                  'Pond & Sea Fish',
                  'House Hold',
                  'Cow Milk & Meat',
                  'Accessories',
                  'Natural Wheats',
                  'Organic Food',
                ].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-green-600">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  'New Projects',
                  'Our Services',
                  'About Us',
                  'Get in Touch',
                  'Volunteers'
                ].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-green-600">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-700">
                <p><strong>Mon - Fri:</strong> 10:00 am to 06:00 pm</p>
                <p className="mt-2"><strong>Saturday (1st & 4th):</strong> 08:00 am to 04:00 pm</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img src="assets/img/icon/footer-text.png" alt="support-icon" className="w-8 h-8" />
                <div>
                  <span className="block text-sm">Emergency Service</span>
                  <a href="tel:00011122233" className="text-green-600 font-medium">000 111 222 33</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          <p>
            Copyright & design by{' '}
            <a
              href="https://themeforest.net/user/bdevs/portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline"
            >
              @bdevs
            </a>{' '}
            - 2022
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
