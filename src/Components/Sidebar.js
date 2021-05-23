import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 25rem;
  position: fixed;
  height: 100vh;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;
