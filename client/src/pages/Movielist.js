// src/pages/Movielist.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import axios from 'axios';
import SearchInput from "../component/SearchInput";
import MovieComponent from "../component/MovieComp";
import movieApi from "../apicalls/movieApi";

function Movielist() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, updateSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Get the selected date from the route parameters
  const { selectedDate } = useParams();
  const navigate = useNavigate();

// src/pages/Movielist.js
// src/pages/Movielist.js
useEffect(() => {
  const fetchMovies = async () => {
    try {
      // Adjust your API call to include the selected date
      const moviesData = await movieApi.getMovies({ date: selectedDate });
      
      // Log the received movies data
      console.log('Movies Data:', moviesData);

      // Filter movies based on the selectedDate
      const filteredMovies = moviesData.filter(movie => {
        // Assuming movie.date is a Date object
        const movieDate = movie.date.toISOString().split("T")[0];

        // Compare with the selectedDate
        return movieDate === selectedDate;
      });

      // Set the filtered movies
      setMovies(filteredMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      // Handle error
    }
  };

  fetchMovies();
}, [selectedDate]);


  const onTextChange = (event) => {
    updateSearchQuery(event.target.value);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMovies = movies.slice(startIndex, endIndex);

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
