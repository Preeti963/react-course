function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        width="100%"
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
