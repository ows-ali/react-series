import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="card" key={movie.id}>
      <img src={movie.imgSrc} alt="img" className="card_img" />
      <div className="card_info">
        <span className="card_category">{movie.category}</span>
        <h3 className="card_title">{movie.name}</h3>
        <a href={movie.link} target="_blank" rel="noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
