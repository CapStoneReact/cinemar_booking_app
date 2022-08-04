/*eslint-disable*/
import React from "react";
import style from "./Theater.module.scss";
import { useDispatch } from "react-redux";
import { changeTheater } from "../../Slices/filter";

const Theater = ({ name, address, theaterID }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={style.container}
      onClick={() => {
        dispatch(changeTheater(theaterID));
      }}
    >
      <h4 className={style.text}>{name}</h4>
      <h6 className={style.text}>{address}</h6>
      <a style={{ color: "red" }}>[chi tiết] </a>
    </div>
  );
};

export default Theater;
