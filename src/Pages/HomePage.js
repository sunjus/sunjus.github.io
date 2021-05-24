import React from "react";
import styled from "styled-components";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hi, I'm <span>Sunju.</span>
        </h1>
        <p>
          Experienced front-end engineering specializing in React. I love
          building clean and intuitive interfaces, conversations about design
          and delivering features that help simplify a user's experience.
        </p>
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
            <i class="fab fa-node"></i> Nodejs
            <i class="fab fa-node"></i> Express
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

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }

  .stack {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .ltitle {
      color: var(--font-dark-color);
    }

    .hoby row no-margin {
      display: flex;
      .fab {
        padding: 1rem;
        margin: 1rem;
      }
    }
  }
`;

export default HomePage;
