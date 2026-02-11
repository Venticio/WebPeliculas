import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../services/movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMovieById(id)
      .then((movie) => setMovie(movie))
      .finally(() => setLoading(false));
  }, [id]);


  if (loading) {
    return <div className="p-4">Cargando...</div>;
  }


  if (!movie) {
    return (
      <div className="p-4">
        <p>Película no encontrada</p>
        <Link to="/movies" className="text-blue-500 underline">
          Volver
        </Link>
      </div>
    );
  }

 
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/movies" className="text-blue-500 underline">
        ← Volver
      </Link>

      <div className="flex gap-6 mt-4">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-48 h-72 object-cover rounded"
        />

        <div>
          <h1 className="text-2xl font-bold">{movie.title}</h1>

          <p className="text-gray-600">
            {movie.year} • {movie.genre}
          </p>

          <p className="mt-2">⭐ {movie.rating}</p>

          {movie.duration && (
            <p className="text-sm text-gray-600">
              Duración: {movie.duration} min
            </p>
          )}

          {movie.director && (
            <p className="text-sm text-gray-600">
              Director: {movie.director}
            </p>
          )}

          {movie.description && (
            <p className="mt-4 text-gray-800">{movie.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
