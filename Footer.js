import React from 'react';

function Footer() {
  return (
    <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-xl font-semibold mb-4">EduBlockAI</h3>
                <p class="text-gray-400">Empowering the future of AI education through blockchain technology.</p>
            </div>
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Courses</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div class="w-full md:w-1/3">
                <h3 class="text-xl font-semibold mb-4">Connect With Us</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-400 hover:text-white">Twitter</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">LinkedIn</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Facebook</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div class="mt-8 text-center text-gray-400">
            <p>&copy; 2023 EduBlockAI. All rights reserved.</p>
        </div>
    </div>
</footer>
  );
}

export default Footer;


