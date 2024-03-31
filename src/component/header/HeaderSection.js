import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../navbar/NavBar";
import BusinessSection from "../BusinessSection";

const HeaderSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <HeaderContainer>
      <NavBar
        isOpen={isNavOpen}
        toggleIsOpen={() => {
          setIsNavOpen((prev) => !prev);
        }}
      />
      <hr style={{ color: "#a5a5a5", marginBottom: "20px" }} />
      <BusinessSection />
    </HeaderContainer>
  );
};

export default HeaderSection;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 3;
  background-color: #474747;
  /* > div {
    border-bottom: 1px solid #ffff;
  } */
`;
