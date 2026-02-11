import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="block rounded-lg p-4 bg-blue-900 hover:bg-blue-800 transition shadow-md"
    >
      <div className="flex gap-4">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-24 h-36 object-cover rounded"
        />

        <div>
          <h2 className="text-lg font-bold text-white">{movie.title}</h2>
          <p className="text-sm text-gray-300">
            {movie.year} • {movie.genre}
          </p>
          <p className="text-sm text-yellow-400">⭐ {movie.rating}</p>

          {movie.duration && (
            <p className="text-sm text-gray-300">
              Duración: {movie.duration} min
            </p>
          )}

          {movie.director && (
            <p className="text-sm text-gray-300">
              Director: {movie.director}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
