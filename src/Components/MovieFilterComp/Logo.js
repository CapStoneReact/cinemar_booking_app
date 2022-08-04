import React from "react";
import { useDispatch } from "react-redux";
import style from "./Logo.module.scss";
import { changeGroup } from "../../Slices/filter";

const Logo = ({ img, groupID }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={style.container}
      onClick={() => {
        dispatch(changeGroup(groupID));
      }}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default Logo;
