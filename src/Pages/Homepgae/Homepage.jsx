import SlideBar from "../../Components/SlideBar/SlideBar";
import FooterHome from "../../Components/FooterHome/FooterHome";
import Application from "../../Components/Application";
import MovieShowing from "../MovieShowing/MovieShowing";

const HomePage = () => {
  return (
    <div>
      <SlideBar />
      <MovieShowing />
      <Application />
      <FooterHome />
    </div>
  );
};

export default HomePage;
