import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
    
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        transition: all .4s ease-in-out;
    }
`;

export default GlobalStyled;
