import { Outlet, NavLink, useParams } from "react-router-dom"
import MovieCard from '../../components/MovieCard/MovieCard';

import { Details } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
    let {movieId}= useParams();
    return (
        <>  
            <MovieCard/>
            <Details>
                <NavLink 
                    to={`/movies/${movieId}/cast`}
                    style={({ isActive }) => ({
                        boxShadow:  isActive ? 'rgba(233, 83, 218, 1) 0px 1px 8px' : 'none',
                    }
                )}>
                    Cast
                </NavLink>
                <NavLink 
                    to={`/movies/${movieId}/reviews`}
                    style={({ isActive }) => ({
                        boxShadow:  isActive ? 'rgba(233, 83, 218, 1) 0px 1px 8px' : 'none',
                    }
                )}>
                    Reviews
                </NavLink>
            </Details>
            <Outlet/>
        </>

    )
}