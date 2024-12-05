// import { useState, useEffect } from "react";

// import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
// import "./App.css";
// //af924320

// const API_URL = "http://www.omdbapi.com?apikey=af924320";
// const YOUTUBE_API_KEY = "AIzaSyCPWJkVSC2VEZTrPcCqxvTYHGFp2xcdVLo";
// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovies("spider man");
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>Bingeee</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [trailerUrls, setTrailerUrls] = useState({});

  const OMDB_API_KEY = "af924320"; 

  const searchMovies = async (title) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${title}&apikey=${OMDB_API_KEY}`
      );
      const result = await response.json();
      if (result.Search) {
        const movies = result.Search;
        const trailers = {};
        for (const movie of movies) {
         const trailerUrl = `https://www.youtube.com/results?search_query=${movie.Title}+Trailer`
          trailers[movie.imdbID] = trailerUrl;
        }
        setMovies(movies);
        setTrailerUrls(trailers);
      }
    } catch (error) {
      console.error("Error fetching movie data: ", error);
    }
  };

 
  useEffect(() => {
    searchMovies("Batman"); 
  }, []);

  useEffect(()=>{
    if(searchTerm){
      searchMovies(searchTerm)
    }
  },[searchTerm])

  return (
    <div className="app">
      <h1>Bingee</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="container">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              trailerUrl={trailerUrls[movie.imdbID]}
            />
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
