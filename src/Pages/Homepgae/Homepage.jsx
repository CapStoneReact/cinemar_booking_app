import SlideBar from "../../Components/SlideBar/SlideBar";
import FooterHome from "../../Components/FooterHome/FooterHome";
import Application from "../../Components/Application";
import MovieShowing from "../MovieShowing/MovieShowing";
import MovieFilter from "../MovieFilter/MovieFilter";

const HomePage = () => {
  return (
    <div>
      <SlideBar />
      <MovieShowing />
      <Application />
      <MovieFilter />
      <FooterHome />
    </div>
  );
};

export default HomePage;
