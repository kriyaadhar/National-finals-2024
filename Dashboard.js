// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // Use React Router for navigation
// import { ethers } from "ethers"; // Correct import for ethers
// import badgeNFTABI from "../BadgeNFT.json"; // Ensure this path is correct
// import "./Dashboard.css"; // Ensure this path is correct

// const contractAddress = "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c"; // Replace with your deployed contract address

// function Dashboard({ walletAddress }) {
//   const [badges, setBadges] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state to improve UX
//   const [error, setError] = useState(null); // Error state for handling fetch issues

//   // Function to fetch badge metadata for the connected user
//   const fetchBadges = async () => {
//     if (walletAddress) {
//       setLoading(true); // Start loading
//       setError(null); // Reset any previous errors

//       const provider = new ethers.BrowserProvider(window.ethereum); // Correct provider creation
//       const badgeNFTContract = new ethers.Contract(contractAddress, badgeNFTABI, provider);

//       try {
//         const balance = await badgeNFTContract.balanceOf(walletAddress); // Get the number of badges
//         const userBadges = [];

//         for (let i = 0; i < balance; i++) {
//           const tokenId = await badgeNFTContract.tokenOfOwnerByIndex(walletAddress, i); // Get tokenId
//           const tokenURI = await badgeNFTContract.tokenURI(tokenId); // Get metadata URI

//           // Fetch metadata from IPFS
//           const response = await fetch(tokenURI);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch metadata for tokenId ${tokenId}`);
//           }

//           const metadata = await response.json(); // Parse JSON metadata
//           userBadges.push({ tokenId, ...metadata }); // Add to user badges array
//         }

//         setBadges(userBadges); // Update state with the fetched badges
//       } catch (error) {
//         console.error("Error fetching badges:", error);
//         setError("Error fetching badges. Please try again later.");
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBadges(); // Fetch badges when the component mounts
//   }, [walletAddress]);

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <h2>Your Badges</h2>
//         {loading ? (
//           <p>Loading badges...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           <ul>
//             {badges.length === 0 ? (
//               <p>No badges found. Complete tasks to earn badges!</p>
//             ) : (
//               badges.map((badge) => (
//                 <li key={badge.tokenId}>
//                   <Link to={`/badge/${badge.tokenId}`}>
//                     <img src={badge.image} alt={badge.name} width="50" />
//                     <span>{badge.name}</span>
//                   </Link>
//                 </li>
//               ))
//             )}
//           </ul>
//         )}
//       </div>

//       <div className="content">
//         <h1>Welcome to the Dashboard</h1>
//         <p>Select a badge from the sidebar to view details.</p>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { ethers } from "ethers"; // Correct import for ethers
import badgeNFTABI from "../BadgeNFT.json"; // Ensure this path is correct
import BadgeDetail from "./BadgeDetail";

// Define the contract address of your deployed badge NFT smart contract
const contractAddress = "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c"; // Replace with your deployed contract address

function Dashboard({ walletAddress }) {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to improve UX
  const [error, setError] = useState(null); // Error state for handling fetch issues

  // Function to fetch badge metadata for the connected user
  const fetchBadges = async () => {
    if (walletAddress) {
      setLoading(true); // Start loading
      setError(null); // Reset any previous errors

      const provider = new ethers.BrowserProvider(window.ethereum); // Correct provider creation
      const badgeNFTContract = new ethers.Contract(
        contractAddress,
        badgeNFTABI,
        provider
      );

      try {
        const balance = await badgeNFTContract.balanceOf(walletAddress); // Get the number of badges
        const userBadges = [];

        for (let i = 0; i < balance; i++) {
          const tokenId = await badgeNFTContract.tokenOfOwnerByIndex(
            walletAddress,
            i
          ); // Get tokenId
          const tokenURI = await badgeNFTContract.tokenURI(tokenId); // Get metadata URI

          // Fetch metadata from IPFS
          const response = await fetch(tokenURI);
          if (!response.ok) {
            throw new Error(`Failed to fetch metadata for tokenId ${tokenId}`);
          }

          const metadata = await response.json(); // Parse JSON metadata
          userBadges.push({ tokenId, ...metadata }); // Add to user badges array
        }

        setBadges(userBadges); // Update state with the fetched badges
      } catch (error) {
        console.error("Error fetching badges:", error);
        setError("Error fetching badges. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  useEffect(() => {
    fetchBadges(); // Fetch badges when the component mounts
  }, [walletAddress]);

  return (
    <div>
      <BadgeDetail/>
    </div>
  );
}

export default Dashboard;
