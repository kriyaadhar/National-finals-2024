import React, { useState, useEffect } from "react";
import { ethers } from "ethers"; // Import ethers for transaction handling
import { Link } from "react-router-dom"; // Use Link for navigation

function Header({ walletAddress, connectWallet }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sendModalOpen, setSendModalOpen] = useState(false); // For Send Modal
  const [receiveModalOpen, setReceiveModalOpen] = useState(false); // For Receive Modal
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Profile menu
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false); // Resources menu
  const [isPlatformMenuOpen, setIsPlatformMenuOpen] = useState(false); // Platform menu
  const [amount, setAmount] = useState(""); // ETH amount to send
  const [recipient, setRecipient] = useState(""); // Recipient address

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleResourcesMenu = () => setIsResourcesMenuOpen(!isResourcesMenuOpen);
  const togglePlatformMenu = () => setIsPlatformMenuOpen(!isPlatformMenuOpen);

  // Check for MetaMask installation
  const checkMetaMaskInstallation = () => {
    if (typeof window.ethereum === "undefined") {
      alert(
        "MetaMask is not installed. Please install it from the following link:"
      );
      window.open("https://metamask.io/download/", "_blank"); // Updated link
    } else {
      connectWallet();
    }
  };

  const sendEth = async () => {
    if (!window.ethereum || !recipient || !amount) {
      alert("Please fill in the recipient address and amount");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum); // Create a provider
      const signer = await provider.getSigner(); // Get the signer

      const tx = await signer.sendTransaction({
        to: recipient, // Recipient's address
        value: ethers.parseEther(amount), // Convert amount to wei
        gasLimit: 21000, // Set a gas limit for a simple transfer
      });

      await tx.wait(); // Wait for the transaction to be mined
      alert("Transaction successful!");
      setSendModalOpen(false); // Close the modal after success
      setAmount(""); // Reset the input fields
      setRecipient("");
    } catch (error) {
      console.error("Error sending ETH:", error); // Log the error
      alert(`Transaction failed: ${error.message}`); // Display the error message
    }
  };
   // Chatbot script load
   useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "O9tmsLZX-emChrD6DWrW3",
        domain: "www.chatbase.co"
      }`;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.defer = true;
    script2.onload = () => console.log("Chatbot script loaded");
    document.body.appendChild(script2);

    return () => {
      // Cleanup the script when component is unmounted
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-0 bg-black">
      <div className="flex items-center">
        {/* Logo Image */}
        <img
          src={require("/Users/adda247/edublockai-frontend/src/eduLogo.png")}
          alt="EduBlockAI Logo"
          className="h-12 w-12 mr-3"
        />
        {/* Text or Brand Name */}
        <div className="text-white py-8 text-3xl">EduBlock.ai</div>
      </div>

      {/* Navigation Links with Menus */}
      <nav className="flex space-x-6 text-black py-8 relative">
        {/* Profile Menu */}
        <div className="relative">
          <Link onClick={toggleProfileMenu} className="text-white">
            Profile
          </Link>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 bg-black border shadow-lg rounded-lg p-4 w-64">
              <Link to="/dashboard" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Dashboard
              </Link>
              {/* <Link to="/account-settings" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Donations
              </Link> */}
              <Link to="/badge/:tokenId" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Badges
              </Link>
            </div>
          )}
        </div>

        {/* Resources Menu */}
        <div className="relative">
          <Link onClick={toggleResourcesMenu} className="text-white">
            Resources
          </Link>
          {isResourcesMenuOpen && (
            <div className="absolute right-0 mt-2 bg-black border shadow-lg rounded-lg p-4 w-64">
              <Link to="/guides" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Guides
              </Link>
              <Link to="/docs" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Documentation
              </Link>
              <Link to="/tutorials" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Tutorials
              </Link>
            </div>
          )}
        </div>

        {/* Platform Menu */}
        <div className="relative">
          <Link onClick={togglePlatformMenu} className="text-white">
            Platform
          </Link>
          {isPlatformMenuOpen && (
            <div className="absolute right-0 mt-2 bg-black border shadow-lg rounded-lg p-4 w-64">
              <Link to="/platform-overview" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Platform Overview
              </Link>
              <Link to="/features" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Features
              </Link>
              <Link to="/integrations" className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2">
                Integrations
              </Link>
            </div>
          )}
        </div>

        <Link
    to="/take_survey"
    className="text-white border border-black px-0 py-0 rounded-md text-center"
  >
    Take Survey
  </Link>
  <Link
    to="/donation"
    className="text-white border border-black px-0 py-0 rounded-md text-center"
  >
    Donation
  </Link>
  <a
          href="http://s8pmnj0i0daahdho3bq1ce1140.ingress.akash.world/" // Replace with your survey link
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Learner
        </a>
        
  
  
      </nav>

      {/* Wallet and Dropdown for wallet info */}
      <div className="relative">
        <button
          onClick={walletAddress ? toggleDropdown : checkMetaMaskInstallation}
          className="bg-white text-black border-black shadow-black shadow-md px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <img
            src={require("/Users/adda247/edublockai-frontend/src/metamask-icon.png")}
            alt="MetaMask Logo"
            className="w-6 h-6"
          />
          <span>{walletAddress ? "Connected" : "Connect Wallet"}</span>
          {walletAddress && <span className="ml-2">↓</span>}
        </button>

        {/* Dropdown for wallet info */}
        {walletAddress && isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg p-4 w-64">
            <div className="flex items-center mb-2">
              <img
                src={require("/Users/adda247/edublockai-frontend/src/metamask-icon.png")}
                alt="MetaMask Logo"
                className="w-8 h-8"
              />
              <div className="ml-2">
                <p className="text-sm font-semibold">
                  {walletAddress.substring(0, 6)}...
                  {walletAddress.substring(walletAddress.length - 4)}
                </p>
                <p className="text-xs text-gray-500">Balance: 3.038 SEP</p>
              </div>
            </div>

            {/* Send button */}
            <button
              onClick={() => setSendModalOpen(true)}
              className="bg-white text-black px-4 py-2 rounded-md mt-2"
            >
              Send
            </button>

            {/* Receive button */}
            <button
              onClick={() => setReceiveModalOpen(true)}
              className="bg-white text-black px-4 py-2 rounded-md mt-2"
            >
              Receive
            </button>

            {/* Switch Account functionality placeholder */}
            <button
              onClick={() => alert("Switch Account functionality")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
            >
              Switch Account
            </button>
          </div>
        )}
      </div>

      {/* Send ETH Modal */}
      {sendModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Send ETH</h2>
            <input
              type="text"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              placeholder="Amount (ETH)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={sendEth}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
              <button
                onClick={() => setSendModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receive ETH Modal */}
      {receiveModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Receive ETH</h2>
            <p className="mb-4">Your Address:</p>
            <p className="border p-2 w-full mb-4">{walletAddress}</p>
            <button
              onClick={() => setReceiveModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
