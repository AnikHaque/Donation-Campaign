import { useEffect, useState } from "react";
import Job from "../Job/Job";
import DonationsList from "../DonationsList/DonationsList";


const DonationCategory = () => {
    const [jobs, setJobs] = useState([]);
    const [donationCategory, setDonationCategory] = useState([]);
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonationCategory(data));
    }, [])


    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {donationCategory.length}</h2>
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donationCategory.slice(0, dataLength).map(donations => <DonationsList key={donations.id} donations={donations}></DonationsList>)
                }
            </div>
            <div className={dataLength === donationCategory.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(donationCategory.length)}
                    className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};

export default DonationCategory;