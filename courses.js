import React from 'react';

// Sample component for the course section
const CoursesSection = () => {
  return (
    <section className="courses-section__header">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center text-center courses-section">
          <p className="text-lg font-semibold">Our bestselling course</p>
          <p className="text-md mb-4">
            Reasons why you should understand how the <br /> internet and Web3 works.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            View our courses →
          </button>
          <img
            src="/static/media/btc-clear.9551ec0c76d687ac00ea.png"
            alt="eth-icon"
            className="btc-icon mt-4"
          />
          <img
            src="/static/media/btc-blur.dbeae764b436321006ca.png"
            alt="blur-icon"
            className="btcBlur-icon"
          />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center text-center courses-section position-relative">
          <p className="text-lg font-semibold">Our bestselling course</p>
          <p className="text-md mb-4">
            Reasons why you should understand how the <br /> internet and Web3 works.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            View our courses →
          </button>
          <img
            src="/static/media/btc-clear.9551ec0c76d687ac00ea.png"
            alt="eth-icon"
            className="btc-icon mt-4"
          />
          <img
            src="/static/media/btc-blur.dbeae764b436321006ca.png"
            alt="blur-icon"
            className="btcBlur-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
