import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import bg from "../images/bg.png";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 30rem;
  position: fixed;
  height: 100vh;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

const Wrapper = styled.div``;

export default Sidebar;
