import React, { useState } from "react";
import {
  Container,
  Header,
  Appname,
  MovieImage,
  Searchbar,
  SearchIcon,
  MovielistContainer,
  ButtonContainer,
  Button,
} from "../stylesheets/Cssmovielist";
import SearchInput from "../component/SearchInput";
import MovieComponent from "../component/MovieComp";
import { moviesData } from "../component/MoviesData";

function Movielist() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onTextChange = (event) => {
    updateSearchQuery(event.target.value);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedMovies = moviesData.slice(startIndex, endIndex);

  return (
    <Container>
      <Header>
        <Appname>
          <MovieImage src="/clapperboard.png" alt="Clapperboard" />
          Movie Lists
        </Appname>
        <ButtonContainer>
          <Button>Cinema 1</Button>
          <Button>Cinema 2</Button>
          <Button>Cinema 3</Button>
        </ButtonContainer>
        <Searchbar>
          <SearchIcon src="/magnifying-glass.png" alt="MagnifyingGlass" />
          <SearchInput onChange={onTextChange} />
        </Searchbar>
      </Header>
      <MovielistContainer>
        {displayedMovies.map((movie, index) => (
          <MovieComponent key={index} movie={movie} />
        ))}
      </MovielistContainer>
    </Container>
  );
}

export default Movielist;
