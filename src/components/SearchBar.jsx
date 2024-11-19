import { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    onSearch(query, type);
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input input-bordered w-full p-2 border rounded-lg"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="select select-bordered p-2 border rounded-lg"
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
      <button
        onClick={handleSearch}
        className="btn bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
