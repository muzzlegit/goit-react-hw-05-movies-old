import { useState, useEffect } from "react";
import { getMoviesByQuery } from '../../services/movies-API';
import SerchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import { errorToast } from "../../services/notify";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (query) => {
        setQuery(query);
    }
    useEffect(() => {
        if(!query){
            return;
        }
        getMoviesByQuery(query).then(res => {
            if(res.results.length === 0) {
                errorToast('Nothing found. Try enother query');
                return [];
            }
            return res.results
        }
            ).then(setMovies)
    }, [ query ]);
    
    return (
        <>
            <SerchBar onSubmit={handleSubmit}/>
            <MoviesList movies={ movies } path={''}/> 
        </>
    )
}