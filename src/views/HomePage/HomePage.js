import { useState, useEffect } from "react";

import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from '../../services/movies-API';

import { HomeTitle} from './HomePage.Styled';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(res => res.results).then(setMovies);
    }, []);

    return (
        <>
            <HomeTitle>Trending Today</HomeTitle>
            <MoviesList movies={ movies } path={'movies/'}/>
        </>

    )
}

