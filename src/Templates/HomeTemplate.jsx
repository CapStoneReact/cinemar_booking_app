import { Outlet } from "react-router-dom";
import HeaderHome from "../Components/HeaderHome/HeaderHome";
import ScrollTopArrow from "../Components/Scroll/Scroll";

function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <ScrollTopArrow />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
