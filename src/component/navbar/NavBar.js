import styled from "styled-components";
import Logo from "../header/Logo";
import { NavLink } from "react-router-dom";
import {
  FaArrowDown,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const NavBar = ({ isOpen, toggleIsOpen }) => {
  return (
    <Container>
      <Logo maxWidth={"50px"} />
      <hr className="line" />
      <nav className={isOpen ? "open" : null}>
        <NavLink to={"#"}>HOME</NavLink>
        <NavLink to={"#"}>SERVICES</NavLink>
        <NavLink to={"#"}>PAGES</NavLink>
        <NavLink to={"#"}>CASH SHOP</NavLink>
        <NavLink to={"#"}>BLOG</NavLink>
        <NavLink to={"#"}>CONTENT</NavLink>
      </nav>
      <div className="media">
        <div className="medial">
          <FiInstagram size={20} color="#ffffff" />
          <FaLinkedin size={20} color="#ffffff" />
          <FaTwitter size={20} color="#ffffff" />
          <FaFacebookSquare size={20} color="#ffffff" />
        </div>
        <span></span>
        <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
          <CiSearch size={20} color="#ffffff" />
        </div>
        <span></span>
        <div className="help">
          <p style={{ color: "#fff" }}>Need help?</p>
          <p style={{ color: "#fff" }}>+92 666 888 0000</p>
        </div>
      </div>
      <div className="mobile" onClick={toggleIsOpen}>
        {isOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>
    </Container>
  );
};

export default NavBar;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1200px, calc(100% - 100px));
  margin-inline: auto;
  /* padding-block: 5px; */

  .media {
    display: flex;
    align-items: center;

    .medial {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-left: 10px;
    }

    .help {
      padding-left: 13px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  nav {
    display: block;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    /* box-shadow: 5px 3px 7px rgba(0, 0, 0, 0.1); */
    i {
      color: #1976d2;
      padding-top: 10px;
    }
    a {
      padding: 0.5em;
      color: #ffffff;
      text-decoration: none;
      font-size: 14px;
      transition: 0.3s ease-in;
      text-decoration-thickness: 0;
    }

    a.active {
      transition: 0.3s ease-in;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 3px;
      transition: 0.4s ease-in;
    }
  }
  span {
    width: 0.06%;
    height: 100px;
    border: 0.6px solid #cbcbcb;
    margin-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    nav {
      position: fixed;
      display: block;
      top: 90px;
      margin-top: -0;
      left: -32px;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      width: 85%;
      height: calc(100vh - 64px);
      background-color: #474747;
      transform: translateX(-100%);
      transition: 0.3s;
      /* z-index: 10; */

      &.open {
        transform: translateX(0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
      }
    }

    button.rotate i {
      transform: rotateZ(90deg);
    }
  }
`;
