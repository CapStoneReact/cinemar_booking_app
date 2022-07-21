import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMovieShowing } from '../../Slices/movie';



const MovieShowing = () => {

    const { movies  , isLoading, error } = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieShowing());
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {movies.map((movie) => {
                return <p key={movie.maPhim}>{movie.tenPhim}</p>
            })}
        </div>
    )
}

export default MovieShowing