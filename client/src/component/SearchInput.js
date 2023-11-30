import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  box-shadow: 0 0 12px grey;
  width: 85%;
`;

const SearchInput = () => (
  <StyledInput theme={{ searchBarWeight: 2 }} placeholder="Search Movies" />
);

export default SearchInput;
