import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from '../../utility/localstorage';

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);

  const handleApplyJob = () => {
    saveDonationApplication(idInt);
    toast.success('Donation Applied Successfully');
  };

  return (
    <div>
      <section
        className="relative bg-cover h-[700px] bg-center bg-no-repeat mt-12"
        style={{ backgroundImage: `url(${donation?.picture})` }}
      >
        <div
          className="absolute inset-0 bg-black/50 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          style={{ width: '100%' }} // Full-width black background
        ></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-left">
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <div className="w-full">
                <button
                  style={{ backgroundColor: `${donation?.text_and_button_bg}` }}
                  onClick={handleApplyJob}
                  className="btn text-lg text-white p-2 pl-10 pr-10 pt-4 pb-4 rounded-md w-full"
                >
                  Donate {donation?.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />

      <section>
        <h1 className='text-3xl font-bold mt-12 mb-4'>{donation?.title}</h1>
        <p>{donation?.description}</p>
      </section>
    </div>
  );
};

export default DonationDetails;
