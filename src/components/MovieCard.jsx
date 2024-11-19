import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="card w-full bg-base-100 shadow-md rounded-lg">
    <Link to={`/movie/${movie.imdbID}`}>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="font-bold">{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </Link>
  </div>
);

export default MovieCard;
