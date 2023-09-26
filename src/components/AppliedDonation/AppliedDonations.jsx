import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationApplication } from "../../utility/localstorage";



const AppliedDonations = () => {
    const donations = useLoaderData();
 const [dataLength, setDataLength] = useState(4);
    const [appliedDonations, setAppliedDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);

    const handleDonationssFilter = filter =>{
        if(filter === 'all'){
            setDisplayDonations(appliedDonations);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedDonations.filter(donation => donation.remote_or_onsite === 'Remote');
            setDisplayDonations(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedDonations.filter(donation => donation.remote_or_onsite === 'Onsite');
            setDisplayDonations(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedDonationIds = getStoredDonationApplication();
        if (donations.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const donationsApplied = [];
            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donationsApplied.push(donation)
                }
            }
            setAppliedDonations(donationsApplied);
            setDisplayDonations(donationsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [donations])
    return (
        <div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">

                {
                    displayDonations.slice(0, dataLength).map(donation => <article className="flex bg-white transition hover:shadow-xl">
 

  <div className="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src={donation.picture}
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between p-4" style={{ backgroundColor: `${donation?.card_bg}`  }}>
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className=" font-semibold" style={{ color:`${donation?.text_and_button_bg}`}}>
         {donation?.category}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 font-bold text-xl">
       {donation?.title}
      </p>
      <p className="mt-2 line-clamp-3 text-sm font-semibold" style={{ color:`${donation?.text_and_button_bg}`}}>
       ${donation?.price}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end ">
      <a
        href="#"
        className="block text-white rounded-md  px-5 py-3 text-center text-xs font-bold transition hover:bg-yellow-400" style={{ backgroundColor: `${donation?.text_and_button_bg}`  }}
      >
       View Details
      </a>
    </div>
  </div>
</article>)
                }

               
</div>
 <div className={dataLength === donations.length ? 'hidden' : ''}>
    <div className="flex items-center justify-center mt-8">
 <button
                    onClick={() => setDataLength(donations.length)}
                    className="btn bg-green-700 text-white p-3 pl-4 pr-4 rounded-md">See All</button>
    </div>
               
            </div>
   
        </div>
    );
};

export default AppliedDonations;