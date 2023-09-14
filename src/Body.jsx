import React, { useEffect, useState } from 'react';

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
const link = test.backdrop_path;

const Body = ({link}) => {
  
  const [movieData, setMovieData] = useState(null);
  const [genres, setGenres] = useState([]);

const getYearFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

  const search = (
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667
     11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667
     2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="black" strokeWidth="2"
     strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
  
    useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => {
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
        
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
     <div>
        <img 
        src={test.backdrop_path !== 'N/A' ? test.backdrop_path :
        handleImageError} height="100px" width="70px"
        />
        <div>
          <div>USA {getYearFromDate(test.release_date)}</div>
          <h1>{test.title}</h1>
          <p>Genres: {test.genre_ids.map((genreId) => genres[genreId]).join(", ")}</p>
        </div>
     </div>
    </div>
  );
}

export default Body;