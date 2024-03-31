import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BusinessSection = () => {
  return (
    <HeaderBusiness>
      <p>WELCOME TO CODESHAPER</p>
      <h1>
        Consulting <br /> for every
        <br /> business
      </h1>
      <Button variant="contained">Discovery More</Button>
    </HeaderBusiness>
  );
};

export default BusinessSection;
export const HeaderBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3rem;

  p {
    color: white;
    font-size: 0.8rem;
  }
  h1 {
    text-transform: uppercase;
    color: white;
  }
  Button {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
