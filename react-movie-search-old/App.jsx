import {useState} from "react";

function App(){
    const[query, setQuery] = useState("");
    const[movies, setMovies]= useState([]);
    const [searched, setSearched] = useState(false);

    
    const API_KEY = "YOUR_KEY";
    
    const searchMovie = async ()=>{
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.Search || []);
    };
    return(
        <div>
            <h1>Movie Search App</h1>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter movie name"
            />
            <button onClick={searchMovie}>Search</button>

        {/* Conditional Rendering */}
      {movies.length > 0 && (
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {searched && movies.length === 0 && (
        <p>No movies found 😕</p>
      )}
    </div>
    );
}