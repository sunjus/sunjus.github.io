import img1 from "../images/pic1.png";
import img2 from "../images/pic2.png";
import img3 from "../images/pic3.png";
import img4 from "../images/pic4.png";

const portfolio = [
  {
    id: 1,
    category: "JavaScript",
    image: img4,
    link1: "https://github.com/sunjus/recipe-app",
    link2: "https://sunjus.github.io/recipe-app/",
    title: "Recipe app",
    text: "Recipe search and filter Application",
    skillset: " Javascript, CSS3",
  },
  {
    id: 2,
    category: "React",
    image: img2,
    link1: "https://github.com/sunjus/movie-app",
    link2: "https://movie-wonderful.netlify.app/",
    title: "Movie app",
    text: "Movie Search Application",
    skillset: " React, Styled-components",
  },

  {
    id: 3,
    category: "React & Typescript",
    image: img1,
    link1: "https://github.com/sunjus/daily_voca",
    link2: "https://daily-voca.herokuapp.com/",
    title: "Voca app",
    text: "Voca Application",
    skillset: " ReactJS, TypeScript, CSS",
  },

  {
    id: 4,
    category: "MERN",
    image: img3,
    link1: "https://github.com/sunjus/fullstackopen-part3",
    link2: "https://sleepy-lake-84219.herokuapp.com/",
    title: "Phonebook app",
    text: "Phonebook Application",
    skillset: " ReactJS, Styled-components, nodeJS, expressJS, MongoDB ",
  },
];

export default portfolio;
