import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Movie.module.scss";
import Showtime from "./Showtime";

const Movie = ({ name, img, showtime }) => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const handleClick = (id) => {
    if (user != null) {
      navigate(`bookticket/${id}`)
    }
    else {
      navigate('login')
    }


  }
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
            <div key={item.maLichChieu} className={style.col} onClick={() => handleClick(item.maLichChieu)}>
              <Showtime dateTime={item.ngayChieuGioChieu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
