import { Outlet } from "react-router-dom";
import HeaderHome from "../Components/HeaderHome/HeaderHome";
// import SlideBar from "../Components/SlideBar/SlideBar";

function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
