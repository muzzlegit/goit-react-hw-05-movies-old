import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CastCard from "../../components/CastCard/CastCard";


import { getMovieCast } from '../../services/movies-API';

export default function Cast() {
    const [cast, setCast] = useState([]);
    let {movieId}= useParams();

    useEffect(() => {
        getMovieCast(movieId).then( res => res.cast).then(setCast);
    }, [movieId]);

    return (
        <>
            <CastCard cast = {cast}/>
        </>
    )
}