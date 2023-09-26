const getStoredDonationApplication = () =>{
    const storedDonationApplication = localStorage.getItem('donation-applications');
    if(storedDonationApplication){
        return JSON.parse(storedDonationApplication);
    }
    return [];
}


const saveDonationApplication = id =>{
    const storedDonationApplications = getStoredDonationApplication();
    const exists = storedDonationApplications.find(DonationId => DonationId === id);
    if(!exists){
        storedDonationApplications.push(id);
        localStorage.setItem('donation-applications', JSON.stringify(storedDonationApplications))
    }
}

export { getStoredDonationApplication, saveDonationApplication}