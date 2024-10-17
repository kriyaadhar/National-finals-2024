import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const contractABI = [
  // Insert ABI here
];
const contractAddress = "0x5FD6eB55D12E759a21C09eF703fe0CBa1DC9d88D";  // Your smart contract address

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ title: '', description: '', target: '', deadline: '', image: '' });
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          setProvider(provider);
          const signer = await provider.getSigner();
          const crowdFundingContract = new ethers.Contract(contractAddress, contractABI, signer);
          setContract(crowdFundingContract);
          await loadCampaigns(crowdFundingContract);
        } catch (error) {
          console.error('Error initializing dApp:', error);
          setError('Could not load the contract or MetaMask.');
        }
      } else {
        alert('Please install MetaMask');
      }
    };
    init();
  }, []);

  const loadCampaigns = async (contractInstance) => {
    try {
      const allCampaigns = await contractInstance.getCampaigns();
      if (allCampaigns.length > 0) {
        setCampaigns(allCampaigns);
      } else {
        setError('No campaigns found.');
      }
    } catch (error) {
      console.error('Error loading campaigns:', error);
      setError('Failed to load campaigns.');
    }
  };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    if (!contract || !provider) return;
    try {
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const tx = await contract.createCampaign(
        address,
        newCampaign.title,
        newCampaign.description,
        ethers.parseEther(newCampaign.target),
        Math.floor(new Date(newCampaign.deadline).getTime() / 1000),
        newCampaign.image
      );
      await tx.wait();
      await loadCampaigns(contract);
      setNewCampaign({ title: '', description: '', target: '', deadline: '', image: '' });
    } catch (error) {
      console.error('Error creating campaign:', error);
      setError('Failed to create campaign.');
    }
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!contract || selectedCampaign === null) return;
    try {
      const tx = await contract.donateToCampaign(selectedCampaign, {
        value: ethers.parseEther(donationAmount)
      });
      await tx.wait();
      await loadCampaigns(contract);
      setDonationAmount('');
      setSelectedCampaign(null);
    } catch (error) {
      console.error('Error donating:', error);
      setError('Failed to donate.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Display Error */}
      {error && <div className="bg-red-600 text-white p-4 mb-4 rounded-lg">{error}</div>}

      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white p-12 text-center rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Support Your Favorite Campaigns</h1>
        <p className="text-lg mb-6">Donate to causes that matter and help make a difference.</p>
        <a href="#create-campaign" className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</a>
      </section>

      {/* Create Campaign Section */}
      <section id="create-campaign" className="bg-white p-6 mb-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Create a New Campaign</h2>
        <form onSubmit={handleCreateCampaign}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Campaign Title</label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newCampaign.title}
              onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newCampaign.description}
              onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="target" className="block text-gray-700">Target Amount (ETH)</label>
            <input
              type="number"
              id="target"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newCampaign.target}
              onChange={(e) => setNewCampaign({ ...newCampaign, target: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700">Deadline</label>
            <input
              type="date"
              id="deadline"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newCampaign.deadline}
              onChange={(e) => setNewCampaign({ ...newCampaign, deadline: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Image URL</label>
            <input
              type="url"
              id="image"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newCampaign.image}
              onChange={(e) => setNewCampaign({ ...newCampaign, image: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Create Campaign</button>
        </form>
      </section>

      {/* Campaign Cards Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Active Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.length > 0 ? (
            campaigns.map((campaign, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
                <p className="text-gray-700 mb-2">{campaign.description}</p>
                <p className="text-gray-600 mb-4">Target: {ethers.formatEther(campaign.target)} ETH</p>
                <button
                  className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700"
                  onClick={() => setSelectedCampaign(campaign.id)}
                >
                  Donate
                </button>
              </div>
            ))
          ) : (
            <p>No active campaigns found.</p>
          )}
        </div>
      </section>

      {/* Donation Form */}
      {selectedCampaign !== null && (
        <section className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Donate to Campaign</h2>
          <form onSubmit={handleDonate}>
            <div className="mb-4">
              <label htmlFor="donationAmount" className="block text-gray-700">Amount (ETH)</label>
              <input
                type="number"
                id="donationAmount"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Donate</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default App;
