import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';



const TMDB_API_KEY = '76850567acd1f0cd4678da174f243259';

async function fetchMovies(query) {
  const tmdbApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;
  const response = await axios.get(tmdbApiUrl);
  const movies = response.data.results;
  return movies;
}

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('avengers');

  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies(query);
      setMovies(movies);
    }
    getMovies();
  }, [query]);

  return (
    <div className="container">  
    <p> POWERED BY IMANDRIFATURAHMAN </p>
    <div className="row">
    <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
    <h1>MOVIES LIST TMDB</h1>
    {movies.map(movie => (
      <div className="col-3">
        <CardMovies key={movie.id} 
        homepage={movie.homepage}
        imdb_id={movie.imdb_id}
        original_title={movie.original_title}
        original_language={movie.original_language}
        overview={movie.overview}
        popularity={movie.popularity}
        poster_path={movie.poster_path}
        production_companies={movie.production_companies}
        release_date={movie.release_date}
        video={movie.video}
        status={movie.status}
        budget={movie.budget}
        />
        </div>
       
    ))}
    </div>
   </div>
  );
}

function CardMovies(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
      <Card.Body>
      <Card.Title>{props.homepage}</Card.Title>
        <Card.Title>{props.original_title}</Card.Title>
        <Card.Text>{props.original_language}</Card.Text>
        <Card.Text>{props.popularity}</Card.Text>
        <Card.Text>{props.overview}</Card.Text>
        <Card.Text>{props.genres}</Card.Text>
        <Card.Text>{props.release_date}</Card.Text>
        <Card.Text>{props.video}</Card.Text>
        <Card.Text>{props.status}</Card.Text>
        <Card.Text>{props.budget}</Card.Text>
      </Card.Body>
    </Card>
  );
}


export default MovieList;