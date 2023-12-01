// MovieComp.js
import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 350px;
  box-shadow: 0 10px 40px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 7px 0px;
`;

const MovieTime = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MovieComponent = ({ movie }) => {
  console.log('Movie Data in Component:', movie);
  return (
    <MovieContainer>
      <CoverImage src={movie.poster} alt={`Poster for ${movie.title}`} />
      <MovieName>{movie.title}</MovieName>
      <InfoColumn>
        <span>Year: {movie.year}</span>
        <span>Genre: {movie.genre}</span>
        <MovieTime>Time: {movie.time}</MovieTime>
        <span>Cinema Number: {movie.cinema_number}</span>
        <span>Date: {movie.date}</span>
        <span>Is Premium: {movie.isPremium ? 'Yes' : 'No'}</span>
        {/* Add more information as needed */}
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;