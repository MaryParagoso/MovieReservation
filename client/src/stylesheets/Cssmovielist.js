// Cssmovielist.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
`;

export const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

export const Searchbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  background-color: white;
  border-radius: 10px;
  margin-left: 20px;
  width: 30%;
  background-color: white;
`;

export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px;
`;

export const MovielistContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  font-size: 20px;
`;

export const Button = styled.div`
  cursor: pointer;
  color: white;
  transition: color 0.3s, backdrop-filter 0.3s;

  &:hover {
    color: #fff;
    backdrop-filter: blur(5px);
  }
`;
