import Hero from "../components/Hero";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-8">
      <Hero />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  );
};

export default Home;
