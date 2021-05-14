import { MovieProps } from '../interfaces/MovieProps';
import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface MoviesListProps {
  movies: Array<MovieProps>;
}

export function Content(props: MoviesListProps) {
  return (
    <main>
      <div className="movies-list">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
