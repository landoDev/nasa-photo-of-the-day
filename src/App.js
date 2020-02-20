import React from "react";
import "./App.css";
import Header from "./components/Header"
import PhotoCard from "./components/PhotoCard"
import styled from "styled-components";

// const BodyWrapper = styled.div`
//   background-image: 
// `;
// I want the app to have the bg image in my folder
function App() {
  return (
    <div className="App">
    {/* // <BodyWrapper> */}
      <Header />
      <PhotoCard />
    {/* // </BodyWrapper> */}
    </div>
  );
}

export default App;
