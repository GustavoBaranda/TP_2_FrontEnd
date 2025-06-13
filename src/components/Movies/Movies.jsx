import { useState, useEffect } from 'react';
import './Movies.css';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWMyYTcxYjQ5ZDQwMjY3NTcxNjE5ZjBhNzc0NjBmYSIsIm5iZiI6MTc0NTUyMDc4Ny40NCwic3ViIjoiNjgwYTg4OTNlOTJmOTQwY2E2OWQyMjBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.2bXBk9rMVtk2AObVWAry_MjMvgm5n2URwjJaOhs8pPU';
const API_URL = 'https://api.themoviedb.org/3';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${API_URL}/movie/popular?language=es-ES&page=${page}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      console.log(response);
      if (!response.ok) throw new Error('Error al cargar las películas');
      const data = await response.json();
      setMovies(data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  if (loading) return <div className='loading'>Cargando...</div>;
  if (error) return <div className='error'>{error}</div>;

  if (selectedMovie) {
    return (
      <div className='movies-container'>
        <button className='back-button' onClick={handleBack}>
          ← Volver
        </button>
        <div className='movie-detail'>
          <h2>{selectedMovie.title}</h2>
          <div className='movie-info'>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className='movie-poster'
            />
            <div className='movie-metadata'>
              <p>
                <strong>Fecha de estreno:</strong>{' '}
                {new Date(selectedMovie.release_date).getFullYear()}
              </p>
              <p>
                <strong>Calificación:</strong>{' '}
                {selectedMovie.vote_average.toFixed(1)}/10
              </p>
              <p className='movie-overview'>{selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='movies-container'>
      <h1>Películas Populares</h1>
      <div className='pagination'>
        <button
          onClick={() => {
            setPage((p) => Math.max(1, p - 1));
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          onClick={() => {
            setPage((p) => p + 1);
            window.scrollTo(0, 0);
          }}>
          Siguiente
        </button>
      </div>
      <div className='movies-grid'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className='movie-card'
            onClick={() => handleMovieSelect(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-card-poster'
            />
            <div className='movie-card-content'>
              <h3>{movie.title}</h3>
              <div className='movie-card-info'>
                <span className='movie-year'>
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className='movie-rating'>
                  {movie.vote_average.toFixed(1)}/10
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button
          onClick={() => {
            setPage((p) => Math.max(1, p - 1));
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          onClick={() => {
            setPage((p) => p + 1);
            window.scrollTo(0, 0);
          }}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Movies;
