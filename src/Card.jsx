import React from 'react';

const Card = () => {
  const getAPI = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5305712a59ce49234a0aa2a117b38249");
  }
  return(
    <h1>Hello World</h1>
  );
}

export default Card