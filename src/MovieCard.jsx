// import React from "react";

// const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img
//           src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
//           alt={Title}
//         />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// };

// export default MovieCard; 

import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, trailerUrl }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            {/* <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
                {trailerUrl && <a href={trailerUrl} target="_blank" rel="noopener noreferrer">Watch Trailer</a>}
            </div> */}

<div className="movie-details">
    <span>{Type}</span>
    <h3>{Title}</h3>
    {trailerUrl && <a href={trailerUrl} target="_blank" rel="noopener noreferrer">Watch Trailer</a>}
</div>

        </div>
    );
};

export default MovieCard;
