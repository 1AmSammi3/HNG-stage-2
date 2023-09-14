import React, { useEffect } from 'react';
import Search from './assets/Search.svg';

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=5305712a59ce49234a0aa2a117b38249";

const Body = () => {

  const search = {
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  }
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div>
      <div>
        <input
          placeholder="What do you want to watch"
        />
        <img src={search} alt="search" />
      </div>
      <div>
        <p>Hi</p>
        <img alt="Stuff" />
      </div>
    </div>
  );
}

export default Body;