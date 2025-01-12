import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Faq from "../components/Faqs";
import ChooseUs from "../components/ChooseUs";
import Banner from "../components/Banner";
import PickCar from "../components/PickACar";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Download from "../components/Download";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
};
export default Home;
