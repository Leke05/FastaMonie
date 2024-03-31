import { Button } from "@mui/material";
import React from "react";
import { HeaderBusiness } from "../BusinessSection";
import styled from "styled-components";

const MissionIndex = () => {
  return (
    <Container>
      <h1>
        Mission is to protect <br /> your businesses & <br /> much more
      </h1>
      <Button variant="contained">Discovery More</Button>
    </Container>
  );
};

export default MissionIndex;
const Container = styled(HeaderBusiness)`
  align-items: center;
`;
