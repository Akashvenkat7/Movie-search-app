import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const generateRandomRating = () => (Math.random() * 4 + 1).toFixed(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies('Avengers', '', page);
      if (data && data.Search) {
        const moviesWithRatings = data.Search.map((movie) => ({
          ...movie,
          imdbRating: generateRandomRating(),
        }));
        setMovies(moviesWithRatings);
      }
    };
    fetchMovies();
  }, [page]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchMovies(search, '', 1);
    if (data && data.Search) {
      const moviesWithRatings = data.Search.map((movie) => ({
        ...movie,
        imdbRating: generateRandomRating(),
      }));
      setMovies(moviesWithRatings);
    }
  };

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => page > 1 && setPage(page - 1);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold text-white">Movie Search App</h1>
        <div className="flex space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for movies..."
              className="w-64 p-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
            <button
              type="submit"
              className="p-2 bg-red-600 text-white rounded-r-md hover:bg-red-700"
            >
              Search
            </button>
          </form>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Favorites
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <div className="bg-gray-800 p-2 rounded-md cursor-pointer hover:scale-105 transition-transform">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <h3 className="text-white text-sm font-semibold truncate">
                  {movie.Title}
                </h3>
                <p className="text-gray-400 text-xs">Year: {movie.Year}</p>
                <p className="text-yellow-400 text-xs font-bold">
                  Rating: {movie.imdbRating} / 5
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md ${
            page === 1
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          } text-white`}
        >
          Previous
        </button>
        <span className="text-white">Page {page}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
