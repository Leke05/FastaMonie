import styled from "styled-components";
import { JobContainer } from "../globalcomponents/Utils";

const Growth = () => {
  const arr = [
    {
      id: 1,
      text: "Business Growth",
    },
    {
      id: 2,
      text: "Business Growth",
    },
    {
      id: 3,
      text: "Business Growth",
    },
  ];

  const templates = arr?.map((item) => {
    return (
      <GrowthCard key={item.id}>
        {item.id === 1 ? (
          <p className="text-primary">{item.text}</p>
        ) : (
          <p>{item.text}</p>
        )}
      </GrowthCard>
    );
  });
  return <Container>{templates}</Container>;
};

export default Growth;
const GrowthCard = styled.div`
  background-color: #fff;
  background-color: 2px solid #fafafa;
  /* border-radius: 0.8rem; */
  box-shadow: 0 4px 10px #ccccccfa;
  padding: 2rem;

  p {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
const Container = styled(JobContainer)`
  gap: 5px;
`;
