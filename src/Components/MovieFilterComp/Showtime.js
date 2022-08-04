import React from "react";
import style from "./Showtime.module.scss";

const Showtime = ({ dateTime }) => {
  const date = dateTime.slice(0, 10);
  const time = dateTime.slice(11, 16);
  return (
    <div className={style.item}>
      <p style={{ color: "#00ac4d" }}>{date}</p>
      <p>&nbsp;~&nbsp;</p>
      <p style={{ color: "#fb4226" }}>{time}</p>
    </div>
  );
};
export default Showtime;
