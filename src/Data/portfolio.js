import img1 from "../images/pic1.png";
import img2 from "../images/pic2.png";
import img3 from "../images/pic3.png";
import img4 from "../images/pic4.png";
import img5 from "../images/pic5.png";

const portfolio = [
  {
    id: 1,
    category: "JavaScript",
    image: img4,
    link1: "https://github.com/sunjus/recipe-app",
    link2: "https://sunjus.github.io/recipe-app/",
    title: "Recipe app",
    skillset: " Javascript, CSS3",
  },
  {
    id: 2,
    category: "React",
    image: img2,
    link1: "https://github.com/sunjus/movie-app",
    link2: "https://movie-wonderful.netlify.app/",
    title: "Movie app",
    skillset: " React, Styled-components",
  },

  {
    id: 3,
    category: "React & Typescript",
    image: img1,
    link1: "https://github.com/sunjus/daily_voca",
    link2: "https://daily-voca.herokuapp.com/",
    title: "Voca app",
    skillset: " ReactJS, TypeScript, CSS",
  },

  {
    id: 4,
    category: "MERN",
    image: img3,
    link1: "https://github.com/sunjus/fullstackopen-part3",
    link2: "https://sleepy-lake-84219.herokuapp.com/",
    title: "Phonebook app",
    skillset: " ReactJS, Styled-components, nodeJS, expressJS, MongoDB ",
  },
  {
    id: 5,
    category: "MERN",
    image: img5,
    link1: "https://github.com/sunjus/social-events-app",
    link2: "https://fullstack-events-app.herokuapp.com/",
    title: "Social-event app",
    skillset: " ReactJS, reactstrap, nodeJS, expressJS, MongoDB ",
  },
];

export default portfolio;
