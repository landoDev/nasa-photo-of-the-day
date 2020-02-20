import React from "react";
// import LogoTransparent from "../images/logo-transparent.jpg";
import styled from "styled-components";
import logo from "./images/logo.jpg";

const HeaderDiv = styled.div`
    background-color: #0b3d91;
    margin-bottom: 5%;
    border-bottom: 5px solid #fc3d21;
`;

const StyleH1 = styled.h1`
    font-size: 3.5rem;
    color: white;
`;

// const LogoDiv = styled.div`
// `;

export default function Header () {
    return (
        // <div className="header-container">
        //     <img src="" alt ="nasa-logo"></img>
        //     <h1 className="page-title">NASA Photo of the Day</h1>
        // </div>
        <HeaderDiv>
            <img src={logo} alt="logo"></img>
            <StyleH1>NASA Photo of the Day</StyleH1>
        </HeaderDiv>
    )
}