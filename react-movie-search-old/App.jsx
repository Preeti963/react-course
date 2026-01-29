import { useState } from "react";

const API_KEY = "296607b2"; // your activated key

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = async () => {
    if (!query) return;

    setLoading(true);
    setMovies([]);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Movie Search App</h1>

      <div style={styles.searchBox}>
        <input
          style={styles.input}
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovie()}
        />
        <button style={styles.button} onClick={searchMovie}>
          Search
        </button>
      </div>

      {loading && <p style={{ color: "#fff" }}>Loading...</p>}
      {!loading && movies.length === 0 && query && (
        <p style={{ color: "#fff" }}>No movies found</p>
      )}

      <div style={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={styles.card}>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.Title}
              style={styles.image}
            />
            <div style={styles.movieInfo}>
              <h3 style={styles.movieTitle}>{movie.Title}</h3>
              <p style={styles.movieYear}>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg, #3c6271ff, #203a43, #538fa9ff)",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    backgroundColor: "#333", 
    color: "#fff",
},

  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#e50914",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "20px",
    justifyItems: "center",
  },
  card: {
    width: "160px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#222",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },
  movieInfo: {
    padding: "10px",
    textAlign: "center",
  },
  movieTitle: {
    fontSize: "14px",
    margin: "0 0 5px",
  },
  movieYear: {
    fontSize: "12px",
    color: "#bbb",
    margin: 0,
  },
};

export default App;
