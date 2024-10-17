import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import badgeNFTABI from "../BadgeNFT.json";

const contractAddress = "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c"; // Replace with your deployed contract address

function BadgeDetail() {
  const { tokenId } = useParams(); // Get tokenId from the URL
  const [badge, setBadge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBadge = async () => {
    setLoading(true);
    setError(null);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const badgeNFTContract = new ethers.Contract(contractAddress, badgeNFTABI, provider);

    try {
      const tokenURI = await badgeNFTContract.tokenURI(tokenId);
      const response = await fetch(tokenURI);
      if (!response.ok) {
        throw new Error("Failed to fetch metadata");
      }
      const metadata = await response.json();
      setBadge({ tokenId, ...metadata });
    } catch (error) {
      console.error("Error fetching badge:", error);
      setError("Failed to load badge details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBadge();
  }, [tokenId]);

  if (loading) return <p>Loading badge details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{badge.name}</h1>
      <img src={badge.image} alt={badge.name} width="200" />
      <p>{badge.description}</p>
    </div>
  );
}

export default BadgeDetail;
