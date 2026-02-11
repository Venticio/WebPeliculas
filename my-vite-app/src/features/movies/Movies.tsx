import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.service";


export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      getMovies()
        .then(setMovies)
        .finally(() => setLoading(false));
    }, []);
    
    if (loading) {
      return <div>Cargando películas...</div>;
    };

    console.log("MOVIES:", movies);

    return (
        <div>
            <h1>Películas</h1>
            <MovieList movies={movies} />
        </div>
    );
}

