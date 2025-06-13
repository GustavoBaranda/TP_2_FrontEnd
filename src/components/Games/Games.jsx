import { useState } from 'react';
import gamesData from '../../data/games.json';
import './Games.css';

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = [...new Set(gamesData.games.map((game) => game.genre))];

  // Get unique genres

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleBack = () => {
    setSelectedGame(null);
  };

  // Filter games based on search term and genre
  const filteredGames = gamesData.games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === '' || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  if (selectedGame) {
    return (
      <div className='games-container'>
        <button className='back-button-games' onClick={handleBack}>
          ← Volver
        </button>
        <div className='game-detail'>
          <h2>{selectedGame.title}</h2>
          {selectedGame.image && (
            <img
              src={selectedGame.image}
              alt={`Portada de ${selectedGame.title}`}
              className='game-image'
            />
          )}
          <div className='game-info'>
            <div className='game-metadata'>
              <p>
                <strong>Género:</strong> {selectedGame.genre}
              </p>
              <p>
                <strong>Año:</strong> {selectedGame.year}
              </p>
              <p>
                <strong>Calificación:</strong> {selectedGame.rating}/10
              </p>
            </div>
            <p className='game-description'>{selectedGame.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='games-container'>
      <h1>Colección de Videojuegos</h1>

      <div className='filters-container'>
        <input
          type='text'
          placeholder='Buscar por título...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className='genre-select'>
          <option value=''>Todos los géneros</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className='games-grid'>
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className='game-card'
            onClick={() => handleGameSelect(game)}>
            <div className='game-card-content'>
              <h3>{game.title}</h3>
              {game.image && (
                <img
                  src={game.image}
                  alt={`Portada de ${game.title}`}
                  className='game-card-image'
                />
              )}
              <div className='game-rating'>
                <strong>{game.rating} / 10</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
