import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getMovieById } from '../../services/movies-API';

import { MovieBox, MovieImg, MovieTitle, MovieItem, MovieText} from './MovieCard.styled';

export default function MovieCard() {
    const [movie, setMovie] = useState({});
    let {movieId}= useParams();

    useEffect(() => {
        getMovieById(movieId).then(setMovie);
    }, [movieId]);

    return (
        <MovieBox> 
            <Button/> 
                {movie.poster_path && 
                    <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={ movie.title }/>
                }
            <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieItem>Release date: <MovieText>{movie.release_date}</MovieText></MovieItem>
                <MovieItem>Overview: <MovieText>{movie.overview}</MovieText></MovieItem>
            </div> 
        </MovieBox>
    )
}