import SlideBar from "../../Components/SlideBar/SlideBar";
import FooterHome from "../../Components/FooterHome/FooterHome";
import Application from "../../Components/Application";
import MovieShowing from "../MovieShowing/MovieShowing";
import MovieFilter from "../MovieFilter/MovieFilter";
import News from "../News/News";

const HomePage = () => {
  return (
    <div>
      <SlideBar />
      <MovieShowing />
      <News />
      <Application />
      <MovieFilter />
      <FooterHome />
    </div>
  );
};

export default HomePage;
