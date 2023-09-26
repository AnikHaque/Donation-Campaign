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

  return (
    <div>
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>



      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {filteredDonations.length}</h2>
        <input
          type="text"
          placeholder="Search by title or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 p-2 border rounded-md"
        />
        <button
          onClick={handleSearchClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
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
