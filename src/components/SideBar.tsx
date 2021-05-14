import { Button } from './Button';

import { GenreResponseProps } from '../interfaces/GenreResponseProps';

import '../styles/sidebar.scss';

interface SidebarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  setSelectedGenreId: any;
}

export function SideBar(props: SidebarProps) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {props.genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
