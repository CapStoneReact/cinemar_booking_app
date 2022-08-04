import React from "react";
import style from "./Movie.module.scss";
import Showtime from "./Showtime";

const Movie = ({ name, img, showtime }) => {
  return (
    <div className={style.container}>
      <img src={img} alt="" />
      <div className={style.content}>
        <div className={style.header}>
          <span>C18</span>
          <h4>{name}</h4>
        </div>
        <div className={style.row}>
          {showtime.slice(0, 4).map((item) => (
            <div key={item.maLichChieu} className={style.col}>
              <Showtime dateTime={item.ngayChieuGioChieu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
