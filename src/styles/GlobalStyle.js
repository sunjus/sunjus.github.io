import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --primary-color: #f08c89;
    --primary-color-light: bisque;
    --secondary-color: yellow;
    --background-dark-color: #79b4b4;
    --background-dark-grey: #e4e4e4;
    --border-color:  bisque;
    --background-light-color: white;
    --background-light-color-2: #79b4b4;
    --white-color: #151515;
    --font-light-color: black;
    --font-dark-color: grey;
    --font-dark-color-2: red;
    --sidebar-dark-color: #79b4b4;
    --scrollbar-bg-color: #f08c89;
    --scrollbar-thump-color: red;
    --scrollbar-track-color: #79b4b4;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    
    }

    body {
        background-color: var(--background-light-color);
        color: var(--font-light-color);
        transition: all .4s ease-in-out;
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1.3rem;
    }

    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
            @media screen and (max-width: 502px){
                font-size: 3rem
            }
        }
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }

    h2{
        font-size: 2.1rem;
        color: var(--white-color);
        span{
            font-size: 2.1rem;
            @media screen and (max-width: 502px){
                font-size: 1.3rem
            }
        }
        @media screen and (max-width: 502px){
            font-size: 1.3rem
        }
    }

    span{
        color: var(--font-dark-color);
    }

    //Nav Toggler
    .ham-burger-menu{
        position: absolute;
        right: 5%;
        top: 3%; 
        display: none;
        z-index: 15;
        svg{
            font-size: 2rem;
        }
      }
      .nav-toggle{
          transform: translateX(0);
          z-index: 20;
          background-color: #79b4b4;
        
      }
    @media screen and (max-width:1200px){
      .ham-burger-menu{
          display: block;
      }
    }
`;

export default GlobalStyled;
