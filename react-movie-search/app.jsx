import {useState} from "react";

function App(){
    const[query, setQuery] = useState("");
    const[movies, setMovies]= useState([]);
    
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
        </div>
    );
}