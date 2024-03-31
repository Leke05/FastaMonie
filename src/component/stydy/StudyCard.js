import React from "react";
import styled from "styled-components";
import { CardContainer } from "../globalcomponents/Utils";

const StudyCard = ({ item }) => {
  return (
    <Container>
      {item.id === 1 || item.id === 2 ? (
        <div>
          {/* <div></div> */}
          <div style={{ paddingTop: "1.5rem", marginTop: "2rem" }}>
            <div>
              <img src={item?.image} alt={item.name} />
            </div>
            <h6
              className="text-center text-light"
              style={{ textTransform: "uppercase" }}
            >
              {item?.subHeading}
            </h6>
            <h2 className="text-center text-light">{item?.header}</h2>
            <h2 className="text-center text-light">{item?.headers}</h2>
          </div>
        </div>
      ) : (
        item.id === 3 && (
          <div style={{ paddingTop: "1.5rem", marginTop: "2rem" }}>
            <div className="color-bg">
              <div>
                <img src={item?.image} alt={item.name} />
              </div>
              <h6
                className="text-center text-light"
                style={{ textTransform: "uppercase" }}
              >
                {item?.subHeading}
              </h6>
              <h2 className="text-center text-light">{item?.header}</h2>
              <h2 className="text-center text-light">{item?.headers}</h2>
            </div>
          </div>
        )
      )}
    </Container>
  );
};

export default StudyCard;

const Container = styled(CardContainer)`
  background-color: #93939c;
  border-radius: 0;
  padding: 2rem;

  .color-bg {
    width: 350px;
    aspect-ratio: 2;
    background-color: #3c72fc;
    padding: 2rem;

    @media screen and (width <= 1200px) {
      width: 200px;
      aspect-ratio: 2;
      background-color: #3c72fc;
      padding: 2rem;
    }
  }
`;
