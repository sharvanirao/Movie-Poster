import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const API_KEY = "YOUR_API_KEY"; // replace this
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;