import { Button } from "@mui/material";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Footers>
        <FooterItems>
          <div className="logo">
            <div className="image">
              <img src="/images/logo.jpg" alt="CreativeLogo" />
            </div>
            <p>
              Welcome to our consultancy agency Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Fusce nisi ligula.
            </p>
            <hr className="text-light" />
            <div className="links">
              <div className="media">
                <i class="fa fa-phone-square" aria-hidden="true">
                  <span>+92 666 888 0000</span>
                </i>
              </div>
              <div className="media">
                <i class="fa fa-envelope-o" aria-hidden="true">
                  <span>needhelp@company.com</span>
                </i>
              </div>
              <div className="media">
                <i class="fa fa-map-marker" aria-hidden="true">
                  <span>66 Broklyn Street New York , USA</span>
                </i>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h3>Explore</h3>
            <div className="contact">
              <div>
                <p>About</p>
              </div>
              <div>
                <p>Support</p>
              </div>
              <div>
                <p>Meet our Team</p>
              </div>
              <div>
                <p>Term of use</p>
              </div>
              <div>
                <p>Case studies</p>
              </div>
              <div>
                <p>Privacy & Policy</p>
              </div>
              <div>
                <p>Latest News</p>
              </div>
              <div>
                <p>Help</p>
              </div>
              <div>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="explore">
            <h3 style={{ marginLeft: "10px" }}>NEWSLETTERS</h3>
            <div className="new-letter">
              <div className="form">
                <input type="text" placeholder="Email Address" />
                <Button variant="contained" size="small">
                  REGISTER
                </Button>
              </div>
            </div>
          </div>
        </FooterItems>
        <hr className="text-light" />
        <div className="d-flex justify-content-between footer-container">
          <div>
            <p style={{ color: "#6d6b7d" }}>© Copyright 2021 by Company.</p>
          </div>
          <div className="media-container">
            <FiInstagram size={20} color="#ffffff" />
            <FaLinkedin size={20} color="#ffffff" />
            <FaTwitter size={20} color="#ffffff" />
            <FaFacebookSquare size={20} color="#ffffff" />
          </div>
        </div>
      </Footers>
    </>
  );
};

export default Footer;
const Footers = styled.div`
  margin-top: 20px;
  padding: 1rem;

  .footer-container {
    display: flex;
    justify-content: space-between;
    .media-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 1rem;
    .footer-container {
      display: flex;
      flex-direction: column;
      place-items: center;
      justify-content: space-between;
    }
  }
`;
const FooterItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 4rem;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    /* max-width: 100%;
    width: min(120ch, 100% - 4rem);
    margin-inline: auto; */
  }

  .logo {
    .image {
      width: 30%;
      aspect-ratio: 2/1;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      color: #747284;
      margin-top: 10px;
    }
    @media screen and (max-width: 769px) {
      /* width: 45%; */

      .image {
        margin: auto;
        width: 60%;

        img {
          width: 100%;
          aspect-ratio: 1;
        }
      }

      @media screen and (min-width: 769px) {
        width: 45%;
      }
    }
    .links {
      .media {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        margin-bottom: 1em;

        i {
          color: #3c72fc;
        }
        span {
          color: #6d6b7d;
          font-size: 1rem;
          margin-left: 20px;
        }
      }
    }
  }

  .contacts {
    h3 {
      color: #fff;
      margin-bottom: 5px;
    }
    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* gap: px; */
      color: #747284;
    }
  }
  .explore {
    font-size: 1.2rem;

    color: #615f71;
    h3 {
      color: #fff;
    }
    .new-letter {
      width: 350px;
      height: 100px;
      background-color: #06050c;
      border: 1px solid #06050c;
      padding: 1.6rem;
    }
    .form {
      display: flex;
      width: 300px;
      height: 50px;
      background-color: #fff;
      padding: 0.5rem;
      Button {
        /* margin-right: 20px;
        width: 200px; */
      }
      input {
        border: none !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .explore {
      place-items: center;
      .new-letter {
        width: 400px;
        height: 150px;
        background-color: #06050c;
        border: 1px solid #06050c;
        padding: 1.6rem;
      }
      h3 {
        text-align: center;
      }
      .form {
        flex-direction: column;
        width: 100%;
        gap: 1.5rem;
      }
    }
  }
`;
