/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./MovieFilter.module.scss";
import cn from "classnames";
import Logo from "../../Components/MovieFilterComp/Logo";
import Theater from "../../Components/MovieFilterComp/Theater";
import Movie from "../../Components/MovieFilterComp/Movie";
import TheaterAPI from "../../Service/theaterAPI";
import { changeTheater } from "../../Slices/filter";
import { useDispatch } from "react-redux";

const MovieFilter = () => {
  const dispatch = useDispatch();
  const [listGroup, setListGroup] = useState([]);
  const [listTheater, setListTheater] = useState([]);
  const [listMovie, setListMovie] = useState([]);
  const [spacingGroup, setSpacingGroup] = useState(0);
  const [spacingTheater, setSpacingTheater] = useState(0);
  const { selectedGroup, selectedTheater } = useSelector((state) => {
    return state.filter;
  });

  const fetchGroups = async () => {
    try {
      const data = await TheaterAPI.getGroups();
      setListGroup(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTheaters = async () => {
    try {
      const data = await TheaterAPI.getTheater(selectedGroup);
      setListTheater(data);
      dispatch(changeTheater(data[0].maCumRap));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMovies = async () => {
    try {
      const data = await TheaterAPI.getMovie(selectedGroup);
      const theater = data[0].lstCumRap.find(
        (item) => item.maCumRap === selectedTheater
      );
      setListMovie(theater.danhSachPhim);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useEffect(() => {
    fetchTheaters();
    let index = listGroup.findIndex(
      (item) => item.maHeThongRap === selectedGroup
    );
    index = index == -1 ? 0 : index;
    setSpacingGroup(`${index * 90}px`);
  }, [selectedGroup]);

  useEffect(() => {
    fetchMovies();
    let index = listTheater.findIndex(
      (item) => item.maCumRap === selectedTheater
    );
    index = index == -1 ? 0 : index;
    setSpacingTheater(`${index * 90}px`);
  }, [selectedTheater]);

  return (
    <div className={style.container} id="schedule">
      <div className={cn(style.groupCol, style.col)}>
        {listGroup.map((item) => (
          <Logo
            key={item.maHeThongRap}
            groupID={item.maHeThongRap}
            theaterID={item}
            img={item.logo}
          />
        ))}
        <span style={{ top: spacingGroup }}></span>
      </div>
      <div className={cn(style.theaterCol, style.col)}>
        {listTheater.slice(0, 8).map((item) => (
          <Theater
            key={item.maCumRap}
            theaterID={item.maCumRap}
            name={item.tenCumRap}
            address={item.diaChi}
          />
        ))}
        <span style={{ top: spacingTheater }}></span>
      </div>
      <div className={cn(style.movieCol)}>
        {listMovie.map((item) => (
          <Movie
            key={item.maPhim}
            name={item.tenPhim}
            showtime={item.lstLichChieuTheoPhim}
            img={item.hinhAnh}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieFilter;
