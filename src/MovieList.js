import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ films }) => {
    return (
        <div className="movie-list">
            {films.map((film, index) => (
                <MovieCard key={index} {...film} />
            ))}
        </div>
    );
}

export default MovieList;