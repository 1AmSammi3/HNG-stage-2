import React, { useEffect } from 'react';

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=5305712a59ce49234a0aa2a117b38249";

const test = {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
        18,
        80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 111.417,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 18617
}

const Body = () => {

  const search = (
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667
     11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667
     2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="black" strokeWidth="2"
     strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.results);
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
        {search}
      </div>
      <div>
        <p>Hi</p>
        <img alt="Stuff" />
     </div>
    </div>
  );
}

export default Body;