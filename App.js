import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ComingSoon from "./components/comingsoon";
import BadgeDetail from "./components/BadgeDetail"; // Import BadgeDetail component 
import Donation from "./components/Donation";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]); // Set the first account as the wallet address
      } catch (error) {
        console.error("Error connecting wallet", error);
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(""); // Clear the wallet address to indicate disconnection
  };

  // Detect account changes in MetaMask
  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]); // Update wallet address on account change
      } else {
        setWalletAddress(""); // Reset wallet address if no accounts are connected
      }
    };

    if (window.ethereum) {
      // Listen for account changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  return (
    <Router>
      <Header walletAddress={walletAddress} connectWallet={connectWallet} />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Default Route */}
        <Route path="/dashboard" element={<Dashboard walletAddress={walletAddress} />} /> {/* Dashboard Route */}
        <Route path="/badge/:tokenId" element={<BadgeDetail />} /> {/* Badge Detail Route */}
        <Route path="/take_survey" element={<ComingSoon />} /> {/* Add new route for the Coming Soon page */}
        <Route path="/donation" element={<Donation />} /> {/* Add new route for the Coming Soon page */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
