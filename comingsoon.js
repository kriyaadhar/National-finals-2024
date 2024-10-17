import React from 'react';
import image from '../comingsoon3D.jpeg';

function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Left Section with 3D Image */}
      <div className="relative w-3/4 h-full">
        <img
          src={image} // Replace with your 3D image
          alt="3D Illustration"
          className="w-full h-full object-cover"
        />

        {/* Transparent Card with 'Coming Soon' Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white">Coming Soon</h1>
            <p className="mt-4 text-lg text-gray-300">
              Our devs are working hard to bring you something amazing.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section with Survey Button */}
      <div className="w-1/4 h-full flex items-center justify-center">
        <a
          href="https://forms.gle/W7EmN7nwgv4Vxryh9" // Replace with your survey link
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Learner
        </a>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center">
        <a
          href="https://forms.gle/W7EmN7nwgv4Vxryh9" // Replace with your survey link
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Educator
        </a>
      </div>
    </div>
  );
}

export default ComingSoon;
