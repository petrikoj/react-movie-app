import React from "react";

const CardsLayout = ({ movie, i }) => {
  return (
    <div key={i}>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt=""
      />
      <p>{movie.title}</p>
    </div>
  );
};

export default CardsLayout;
