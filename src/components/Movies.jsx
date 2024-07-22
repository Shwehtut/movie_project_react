import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {
  let movies = [];
  movies = useSelector((state) => state.movies.movies);
  // console.log(movies);

  return (
    <div className="contaioner mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid:cols-1 gap-1">
        {movies.length > 0
          ? movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
          : "There is no movies."}
      </div>
    </div>
  );
};

export default Movies;
