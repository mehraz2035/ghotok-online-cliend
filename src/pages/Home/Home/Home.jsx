import Banner from "../Banner/Banner";
import SixProfile from "../SixProfile/SixProfile";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStories from "../SuccessStories/SuccessStories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SixProfile></SixProfile>
            <SuccessCounter></SuccessCounter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;