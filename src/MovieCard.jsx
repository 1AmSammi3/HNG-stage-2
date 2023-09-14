import React from "react";

const MovieCard = ({test}) => {
  return(
    <div>
        <img 
        src={test.backdrop_path !== 'N/A' ? test.backdrop_path :
        handleImageError} height="100px" width="70px"
        />
        <div>
          <div>USA {getYearFromDate(test.release_date)}</div>
          <h1>{test.title}</h1>
        </div>
   </div>
  );
}

export default MovieCard;