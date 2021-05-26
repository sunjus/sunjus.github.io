import React from "react";
import styled from "styled-components";
import hero from "../images/hero.png";

function HomePage() {
  return (
    <HomePageStyled>
      <div>
        <img src={hero} alt="tech" />
      </div>
      <div className="typography">
        <h2>
          Hi, I'm <span>Sunju</span>, a Front-end developer.
        </h2>
        <h3>
          I build interactive, intuitive, responsive and scalable web-based
          applications using modern web-technologies and tools
        </h3>
        <h3>from the front-end to the backend.</h3>
      </div>
      <div className="stack">
        <h2 class="ltitle">Top Technologies</h2>
        <div class="hoby row no-margin">
          <p>
            <i class="fab fa-js-square"></i>Javascript <span> </span>
            <i class="fab fa-react"></i>React <span> </span>
            <i class="fab fa-js-square"></i>Typescript <span> </span>
          </p>
          <p>
            <i class="fab fa-node"></i> Nodejs <span> </span>
            <i class="fab fa-node"></i> Express <span> </span>
          </p>
          <i class="fas fa-database"></i>MongoDB
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(to bottom, #f08c89, bisque);

  .typography {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }

  .stack {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .ltitle {
      color: var(--font-dark-color);
    }

    .hoby row no-margin {
      display: flex;
      .fab .fas {
        padding: 1rem;
        margin: 1rem;
        color: #f08c89;
      }
    }
  }
`;

export default HomePage;
