import { Link, useLocation } from "react-router-dom";

import { FilmsList, FilmsItem, FilmsTitle} from './MovieList.styled';

export default function MoviesList({movies, path}) {
    const location = useLocation();
   
    return (
        <>
            <FilmsList>
                {movies.map( movie => {
                        return <FilmsItem key ={movie.id}>
                                    <Link   to={`${path}${movie.id}`}
                                            state={{from: location}}
                                    >
                                        <FilmsTitle>
                                            {movie.title}
                                        </FilmsTitle>
                                    </Link>
                                </FilmsItem>
                    })
                }
            </FilmsList>
        </>
    )
}
