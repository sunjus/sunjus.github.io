import React from "react";
import styled from "styled-components";
import react from "../images/reactlogo.png";
import typescript from "../images/typescriptlogo.png";
import sass from "../images/sasslogo.png";
import jest from "../images/jestlogo.png";
import node from "../images/nodelogo.png";
import express from "../images/expresslogo.png";
import mongodb from "../images/mongodblogo.png";
import postman from "../images/postmanlogo.png";

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
          <div className="front">
            <h3>Front-end development</h3>
            <p>
              I build interactive and responsive user interface using modern
              web-technologies and tools such as React.js, Typescript and Sass.
            </p>
            <div className="techs">
              <div className="tech-icon">
                <img src={react} />
                <p> React.js</p>
              </div>
              <div className="tech-icon">
                <img src={sass} />
                <p>Sass</p>
              </div>
              <div className="tech-icon">
                <img src={typescript} />
                <p>Typescript</p>
              </div>
              <div className="tech-icon">
                <img src={jest} />
                <p>Jest</p>
              </div>
            </div>
          </div>
          <div className="server">
            <h3>Server-side development</h3>
            <p>
              I use javascript on the server-side by utilizing its run-time
              node.js. Also, I have experience in interacting with the NoSQL
              database MongoDB.
            </p>
            <div className="techs">
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
              <div className="tech-icon">
                <img src={postman} />
                <p>Postman</p>
              </div>
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
    padding: 2rem;
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    padding: 3rem;
    max-width: 105rem;
  }
  p {
    padding: 1rem;
    font-size: 0.9rem;
  }
  .front,
  .server {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 3rem 2rem;
    max-width: 28rem;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #a8a5a5;
    margin: 2rem 1.5rem;
  }
  .techs {
    display: flex;
    align-items: center;
    padding: 0.2rem;
    margin: 0.2rem;
  }
`;

export default HomePage;
