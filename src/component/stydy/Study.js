import React from "react";
import { PageHeading } from "../globalcomponents/Utils";
import styled from "styled-components";
import StudyCard from "./StudyCard";

const Study = () => {
  const studyData = [
    {
      id: 1,
      subHeading: "Thought leadership",
      headers: "Business Growth",
      image: "./images/automobile.png",
    },
    {
      id: 2,
      subHeading: "Thought leadership",
      headers: "Business Growth",
      image: "./images/automobile.png",
    },
    {
      id: 3,
      subHeading: "Thought leadership",
      headers: "Business Growth",
      image: "./images/automobile.png",
    },
  ];
  return (
    <Container>
      <div>
        <PageHeading>New case studies</PageHeading>
        <p className="text-muted"> We help our client renew their business</p>
      </div>
      <StudyContainer>
        {studyData.map((item) => (
          <StudyCard item={item} key={item.id} />
        ))}
      </StudyContainer>
    </Container>
  );
};

export default Study;
const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
`;
export const StudyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;
