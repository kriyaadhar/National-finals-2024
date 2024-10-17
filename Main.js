import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaRobot, FaLock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';  // For Carousel animations
import { ChevronLeft, ChevronRight } from 'lucide-react'; // For Carousel arrows
import CoursesSection from './courses.js';
import Roadmap from './Roadmap';

// Import your PNG images
import nft1 from '../nft4.png';
import nft2 from '../nft3.png';
import nft3 from '../nft2.png';
import nft4 from '../NFt1.png';
import userImage1 from '../image.png';
import userImage2 from '../image (1).png';
import userImage3 from '../image (2).png';
import coin from '../coin.png';
import coin1 from '../coin1.png';
import ellipse from '../Ellipse.png';

const images = [nft1, nft2, nft3, nft4];  // Add your imported images here

function Main({ walletAddress }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
          
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 h-screen bg-white">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Revolutionizing Education with Blockchain and AI
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <FaGraduationCap size={40} className="text-black" />
            <FaRobot size={40} className="text-black" />
            <FaLock size={40} className="text-black" />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={require("../3Dnonbackground.png")}
            alt="3D Placeholder"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* About the Platform Section */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-gray-300 bg-opacity-90 p-10 rounded-3xl shadow-xl text-center max-w-6xl">
          <p className="text-lg font-medium text-gray-600">What is</p>
          <h3 className="text-6xl font-extrabold text-gray-800 my-4">EduBlockAI</h3>
          <p className="text-base text-gray-600">
            EduBlockAI aims to revolutionize the education sector by leveraging blockchain and AI technologies.
            Our platform provides secure certifications, personalized learning paths, and decentralized communities 
            to empower learners in the Web3 ecosystem.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Gamified Learning */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../gamifiedicon.jpg")} alt="Gamified Learning Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">Gamified Learning</h3>
              <p className="text-gray-600 text-center">Earn rewards while you learn through interactive and gamified education.</p>
            </div>
            {/* Feature 2: Earn While You Learn */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../earnwhilelearn.jpg")} alt="Earn While You Learn Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">Earn While You Learn</h3>
              <p className="text-gray-600 text-center">Get rewarded for acquiring new skills and participating in educational challenges.</p>
            </div>
            {/* Feature 3: AI Chat Assistant */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../aichaticon.jpg")} alt="AI Chat Assistant Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">AI-Powered Chat Assistant</h3>
              <p className="text-gray-600 text-center">Your personal AI assistant to guide you through learning and career paths.</p>
            </div>
            {/* Feature 4: Blockchain Certificates */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../bcertificationicon.jpg")} alt="Blockchain Certificates Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">Blockchain-Based Certificates</h3>
              <p className="text-gray-600 text-center">Receive immutable certificates and badges on the blockchain for completed courses.</p>
            </div>
            {/* Feature 5: Metamask Integration */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../metamask-icon.png")} alt="Metamask Integration Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">Metamask Integration</h3>
              <p className="text-gray-600 text-center">Seamlessly connect to your Metamask wallet for a secure learning experience.</p>
            </div>
            {/* Feature 6: Donations */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={require("../donationiconjpg.jpg")} alt="Donations Icon" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 bg-gray-100 p-2 rounded-md">Donations</h3>
              <p className="text-gray-600 text-center">Support the platform or educators through blockchain-based donation features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Card with Coins */}
      <section className="flex items-center justify-center py-12">
        <div className="relative w-full max-w-4xl p-10 text-center text-white rounded-lg bg-black">
          {/* <div className="absolute top-0 left-0 w-44 h-54 transform -translate-x-1/2 -translate-y-1/2">
            <img
              alt="Coin with dollar sign"
              className="w-full h-full"
              src={coin1} // Replace with the actual path to the first coin image
            />
          </div> */}
          <div className="absolute bottom-0 right-0 w-54 h-64 transform translate-x-1/2 -translate-y-1/2">
            <img
              alt="Coin with Ethereum symbol"
              className="w-full h-full"
              src={coin} // Replace with the actual path to the second coin image
            />
          </div>
          <p className="text-lg">Our bestselling course</p>
          <h1 className="mt-4 text-4xl font-bold">
            Reasons why you should understand how the internet and Web3 works.
          </h1>
          <button className="px-6 py-3 mt-8 text-lg font-semibold bg-black text-white border border-white rounded hover:bg-black hover:text-white transition duration-300">
            View our courses →
          </button>
        </div>
      </section>

      {/* NFT Badge Carousel Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Your NFT Badges</h2>
          <div className="relative w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}  // Use imported images here
                alt={`NFT Badge ${currentIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <Roadmap />
    
      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 text-center mb-4">
                "EduBlockAI has transformed my learning experience. The gamified approach keeps me engaged!"
              </p>
              <div className="flex items-center justify-center">
                <img src={userImage1} alt="User 1" className="rounded-full h-10 w-10 mr-2" />
                <div>
                  <h3 className="font-semibold">Jane Doe</h3>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 text-center mb-4">
                "The AI assistant is fantastic! It helps me find the right courses and stay on track."
              </p>
              <div className="flex items-center justify-center">
                <img src={userImage2} alt="User 2" className="rounded-full h-10 w-10 mr-2" />
                <div>
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-600 text-center mb-4">
                "I love the community aspect of EduBlockAI. It's great to learn and share with others!"
              </p>
              <div className="flex items-center justify-center">
                <img src={userImage3} alt="User 3" className="rounded-full h-10 w-10 mr-2" />
                <div>
                  <h3 className="font-semibold">Emily Johnson</h3>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Address Section */}
      {walletAddress && (
        <section className="py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">Connected Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Main;
