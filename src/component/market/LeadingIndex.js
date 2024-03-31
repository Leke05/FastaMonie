import React from "react";
import styled from "styled-components";
import Professional from "../profession/Professional";
import { PageContainer } from "../globalcomponents/Utils";
import Prof from "../profession/Prof";

const LeadingIndex = () => {
  return (
    <Container>
      <Play>
        <i class="fa fa-play" aria-hidden="true"></i>
      </Play>
      <Professional />
      <Prof />
    </Container>
  );
};

export default LeadingIndex;
const Play = styled.div`
  width: 50px;
  aspect-ratio: 1;
  background-color: #3c72fc;
  padding: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;

  i {
    color: #ffffff;
  }
`;

export const Container = styled(PageContainer)`
  background-color: #ffffff;
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;
