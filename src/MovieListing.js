import React from "react";
import MovieCard from "./MovieCard";

const MovieListing = ({ data }) => {
  return (
    <div>
      {data.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieListing;
