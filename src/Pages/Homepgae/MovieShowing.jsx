import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { getMovieShowing } from "../../Slices/movie";

const MovieShowing = () => {
  const { movies, isLoading, error } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieShowing());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {movies.map((movie) => {
        return <p key={movie.maPhim}>{movie.tenPhim}</p>;
      })}
    </div>
  );
};

export default MovieShowing;
