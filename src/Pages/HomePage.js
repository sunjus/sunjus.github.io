import React from "react";
import styled from "styled-components";
import react from "../images/reactlogo.png";
import typescript from "../images/typescriptlogo.png";
import sass from "../images/sasslogo.png";
import jest from "../images/jestlogo.png";
import node from "../images/nodelogo.png";
import express from "../images/expresslogo.png";
import mongodb from "../images/mongodblogo.jpg";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h2>
          Hi, I'm <span>Sunju</span>, a Front-end developer.
        </h2>
        <h3>
          I build interactive, intuitive and responsive web-based applications
          using modern web-technologies and tools.
        </h3>
        <h3>
          Through consistent daily practice, I’ve managed to develop a skill set
          that covers both ends of the spectrum, from the front-end to the
          backend. Currently, my stronger side is front-end development.
        </h3>
      </div>
      <div className="stack">
        <h2 className="ltitle">Top Technologies</h2>
        <div className="tech">
          <div className="tech-front">
            <h3>Front-end development</h3>
            <div className="tech-icon">
              <img src={react} />
              <p> React.js</p>
            </div>
            <div className="tech-icon">
              <img src={typescript} />
              <p>Typescript</p>
            </div>
            <div className="tech-icon">
              <img src={sass} />
              <p>Sass</p>
            </div>
            <div className="tech-icon">
              <img src={jest} />
              <p>Jest</p>
            </div>
          </div>
          <div className="tech-server">
            <h3>Server-side development</h3>
            <div className="tech-icon">
              <img src={node} />
              <p>Node.js</p>
            </div>
            <div className="tech-icon">
              <img src={express} />
              <p>Express.js</p>
            </div>
            <div className="tech-icon">
              <img src={mongodb} />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  display: block;
  width: 100%;
  height: 100vh;
  padding: 5rem;
  text-align: center;
  .stack {
    text-align: center;
    padding: 3rem;
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3rem;
    max-width: 105rem;
    background-color: bisque;
  }
  .tech-frontend .tech-server {
    display: flex;
    align-items: center;
    padding: 4rem 3rem 2rem;
    max-width: 38rem;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    box-shadow: -0.5rem -0.5rem -0.5rem #fff;
    margin: 2rem 1.5rem;
  }
  .tech-icon {
    padding: 0.5rem;
  }
`;

export default HomePage;
