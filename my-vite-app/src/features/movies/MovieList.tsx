//MovieList
import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

type Props = {
  movies: Movie[];
};

export default function MovieList({ movies }: Props) {
  return (
    <section>
      <div className="flex flex-col gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}