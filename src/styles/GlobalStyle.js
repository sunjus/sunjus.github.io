import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --primary-color: #f774c5;
    --primary-color-light: #ecb6d7;
    --secondary-color: #ff7675;
    --background-dark-color: #faf7f7;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #faf7f7;
    --background-light-color-2: #ecb6d7;
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
        font-family: 'Source Sans Pro', sans-serif;
    
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
        font-size: 1rem;
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

    span{
        color: var(--font-dark-color);
    }
`;

export default GlobalStyled;
