import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id);
      if (data.Response === 'True') {
        setMovie(data);
      }
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full md:w-1/3 h-auto object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{movie.Title}</h1>
        <p className="text-lg">{movie.Plot}</p>
        <p className="mt-2"><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
