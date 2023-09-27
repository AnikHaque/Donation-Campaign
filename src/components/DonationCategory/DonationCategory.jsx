import React, { useState, useEffect } from "react";
import DonationsList from "../DonationsList/DonationsList";

const DonationCategory = () => {
  const [donationCategory, setDonationCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    // Fetch the donation data and set it to the donationCategory state
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonationCategory(data));
  }, []);

  useEffect(() => {
    // Filter the donation categories based on the search query when the "Search" button is clicked
    if (isSearchClicked) {
      const filtered = donationCategory.filter(
        (donation) =>
          donation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          donation.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDonations(filtered);
    }
  }, [searchQuery, donationCategory, isSearchClicked]);

  const handleSearchClick = () => {
    // Set isSearchClicked to true to trigger filtering
    setIsSearchClicked(true);
  };



    const overlayStyle = {
   position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the opacity as needed
    zIndex: 0, //
  };

  return (
    <div> 

      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpapercave.com/wp/wp2789220.jpg)'}}>
  <div className="hero-overlay bg-white bg-opacity-60"></div>
  <div className="">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
      <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-4 p-2 w-96 ml-32 h-14 border rounded-md "
          />
          <button
            onClick={handleSearchClick}
            className="ml-2 p-2 bg-red-500 text-white rounded-md pl-6 pr-6"
          >
            Search
          </button>
      
      
    </div>
  </div>
</div>



      <div className="text-center">
<br></br>       
<br></br>       
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isSearchClicked
          ? filteredDonations.map((donations) => (
              <DonationsList key={donations.id} donations={donations} />
            ))
          : donationCategory.map((donations) => (
              <DonationsList key={donations.id} donations={donations} />
            ))}
      </div>
    </div>
  );
};

export default DonationCategory;
