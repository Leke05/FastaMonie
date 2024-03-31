import React from "react";
import Cards from "./globalcomponents/Cards";
import styled from "styled-components";
import Part from "./market/Part";

const Experience = () => {
  const expData = [
    {
      id: 1,
      name: "Wealth ",
      header: "Management",
      text: "Read More",
      image: "./images/bucket.png",
    },
    {
      id: 2,
      name: "Wealth",
      header: "Management",
      text: "Read More",
      image: "./images/bucket.png",
    },
    {
      id: 3,
      name: "Wealth",
      header: "Management",
      text: "Read More",
      image: "./images/bucket.png",
    },
  ];
  return (
    <Container>
      <div className="experience">
        <h4>Real-World Experience</h4>
        <p>The best business consulting firm you can count on!</p>
      </div>

      <JobContainer>
        {expData.map((item) => (
          <Cards data={item} key={item.id} />
        ))}
      </JobContainer>
      <Part />
    </Container>
  );
};

export default Experience;
const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;

  /* @media screen and (width <= 1200px) {
    padding: none;
  } place-items: center; */
`;
const Container = styled.div`
  background-color: #0f0d1d;
  padding: 20px;

  .icons {
    display: flex;
    justify-content: space-between;
    padding: 1.2em;
  }
  .part {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }

  .part span {
    flex: 1;
    height: 1px;
    background-color: #312f3c;
    margin: 0 0.5rem;
  }

  .part p {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0.5rem;
  }

  .experience {
    h4 {
      text-align: center;
      letter-spacing: 1px;
      color: #fff;
    }
    p {
      text-align: center;
      letter-spacing: 1px;
      color: #fff;
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .wrapper {
    display: grid;
    place-items: center;
  }
`;
