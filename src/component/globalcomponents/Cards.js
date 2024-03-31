import styled from "styled-components";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      <MarketCard>
        <div className="text">
          <h6>{data?.name}</h6>
          <h6 style={{ marginTop: "5px" }}>{data?.header}</h6>
          <p>{data?.text}</p>
        </div>
        <div className="image">
          <img src={data?.image} alt={data?.name} />
        </div>
      </MarketCard>
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.div`
  border-radius: 5px #0f0d1d;
`;

const MarketCard = styled.div`
  position: relative;
  background-color: #000000;
  overflow: hidden;
  padding: 1rem;
  .image {
    width: 100%;
    margin-top: 30px;
    margin-left: 10rem;
    display: flex;
    flex-direction: flex-end;
    img {
      width: 30px;
      aspect-ratio: 1;
      margin-top: 20px;
      margin: auto;
    }
  }

  .text {
    gap: 20px;
    h6 {
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-left: 20px;
    }
    p {
      color: #888699;
      font-size: 10px;
      margin-top: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
      margin-left: 20px;
    }
  }
`;
