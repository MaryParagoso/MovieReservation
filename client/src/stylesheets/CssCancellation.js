//CssCancellationPath.js
import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  height: 100vh;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const CancelContainer = styled.div`
  padding-top: 20px;
  border: 2px solid black;
  border-radius: 20px;
  height: 400px;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.926);
`;

export const CancelWallpaper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url("https://raw.githubusercontent.com/kishan0725/AJAX-Movie-Recommendation-System-with-Sentiment-Analysis/master/static/image.jpg")
    center/cover;
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin: 0 20px;
`;
