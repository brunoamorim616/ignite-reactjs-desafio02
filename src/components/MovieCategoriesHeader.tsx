import { GenreResponseProps } from '../interfaces/GenreResponseProps';

interface MovieCategoriesHeaderProps {
  selectedGenre: GenreResponseProps;
}

export function MovieCategoriesHeader(props: MovieCategoriesHeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.selectedGenre.title}</span>
      </span>
    </header>
  );
}
