import React from "react";

const getYearFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

const MovieCard = ({final}) => {
  return(
    <div>
        <img 
        src={final.backdrop_path !== 'N/A' ? final.backdrop_path :
        handleImageError} height="100px" width="70px"
        />
        <div>
          <div>USA {getYearFromDate(final.release_date)}</div>
          <h1>{final.title}</h1>
        </div>
   </div>
  );
}

export default MovieCard;