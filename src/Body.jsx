import React, { useEffect } from 'react';
import Search from 'assets/Search.svg';

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=5305712a59ce49234a0aa2a117b38249";
  
const Body = () => {
  
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      
      console.log(data.Search);
  }
  
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  
  return(
    <div>
      <div>
        <input
        placeholder= "What do you want to watch"
        />
        <Search />
      </div>
      <div>
        <p>Hi</p>
        <img alt="Stuff"/>
      </div>
    </div>
  );
}

export default Body;