import { useState } from "react";

const API_KEY = "296607b2";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = async () => {
    if (!query) return;

    setLoading(true);
    setMovies([]);

    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await res.json();

    setMovies(data.Search || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Search App</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>

      {loading && <p>Loading...</p>}
      {!loading && movies.length === 0 && <p>No movies found</p>}

      <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} width="150" />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
