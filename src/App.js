import React from "react";
import "./App.css";
import Header from "./components/Header"
import PhotoCard from "./components/PhotoCard"
import styled from "styled-components";

// const BodyWrapper = styled.div`
//   text-align: center;
// `;

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoCard />
    </div>
  );
}

export default App;
