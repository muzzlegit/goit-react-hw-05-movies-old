import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../../services/movies-API';
import SerchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import { errorToast } from "../../services/notify";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const searched = searchParams.get('query');

    useEffect(() => {
        if (!query) {
          return;
        }
        setSearchParams({ query });
      }, [query, setSearchParams]);

    const handleSubmit = (query) => {
        setQuery(query);
    }
    useEffect(() => {
        if(!searched){
            return;
        }
        getMoviesByQuery(searched).then(res => {
            if(res.results.length === 0) {
                errorToast('Nothing found. Try enother query');
                return [];
            }
            return res.results
        }
            ).then(setMovies)
    }, [searched]);
    
    return (
        <>
            <SerchBar onSubmit={handleSubmit}/>
            <MoviesList movies={ movies } path={''}/> 
        </>
    )
}