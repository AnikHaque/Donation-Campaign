import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import DonationCategory from "../DonationCategory/DonationCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div className="container w-100">
            {/* <Banner></Banner> */}
            {/* <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs> */}
            <DonationCategory></DonationCategory>
        </div>
    );
};

export default Home;