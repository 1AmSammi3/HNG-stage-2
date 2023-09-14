import React, { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";

const API_URL =
"https://api.themoviedb.org/3/movie/search?api_key=5305712a59ce49234a0aa2a117b38249";

const Body = ({link}) => {
  
  const [movies, setMovies] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.results);
  }
  
  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/400"
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  
  const search = (
   <svg width="16" height="16" onClick={() => searchMovies(searchTerm)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667
     11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667
     2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="black" strokeWidth="2"
     strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

  return (
  <div>
    <div>
      <input
        placeholder="What do you want to watch"
        value= {searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
      />
      {search}
    </div>
    {
      movies?.length > 0 ? 
      (
        <div>
           {movies.map((final) => (
             <MovieCard final={final} />
           ))}
        </div>
      ) : (
        <div>
          <h1>No movies found</h1>
        </div>
      )
    }
  </div>
);
}

export default Body;