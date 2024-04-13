import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Estates from "../components/Estates";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Property Peak</title>
      </Helmet>
      <Banner />
      <Category />
      <Estates />
    </>
  );
};

export default Home;
