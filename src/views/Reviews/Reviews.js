import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import ReviewsList from "../../components/ReviewsList/ReviewsList";
import { getMovieReviews } from '../../services/movies-API';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    let {movieId}= useParams();

    useEffect(() => {
        getMovieReviews(movieId).then( res => res.results).then(setReviews);
    }, [movieId]);

    return (
        <>  
            <ReviewsList reviews = {reviews}/>
        </>
    )
}