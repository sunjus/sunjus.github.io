import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../images/avatar.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" activeClassName="active-class" exact>
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <div className="icons">
          <a href="https://linkedin.com/in/sunjus" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/sunjus" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://youtube.com" className="icon i-youtube">
            <YouTubeIcon />
          </a>
        </div>
        <p>
          @2021 <span>sunjus</span>
        </p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 5px;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color-light);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.8;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    width: 100%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.7rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid black;
          color: black;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid blue;
          color: blue;
        }
      }
      .i-backup {
        &:hover {
          border: 2px solid blue;
          color: blue;
        }
      }
    }
    p {
      padding: 1.3rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
