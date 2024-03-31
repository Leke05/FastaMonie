import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  gap: 1.5rem;

  & > div {
    display: grid;
    gap: 1.5rem;
  }

  @media screen and (width <= 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const PageAside = styled.aside`
  gap: 1.5rem;

  @media screen and (width <= 1200px) {
    display: none;
  }
`;
export const PageHeading = styled.h1`
  margin-bottom: 16px;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  & + p {
    text-align: center;
    max-width: 50ch;
    margin-inline: auto;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: #575f6e;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
export const CardContainer = styled.div`
  background-color: #fafafa;
  border-radius: 0.8rem;
  box-shadow: 0 4px 10px #ccccccfa;
  padding: 2rem;
`;
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 0.8rem;
  margin-bottom: 50px;
  color: #676767;

  img {
    width: 24px;
  }

  & > div {
    flex-grow: 1;
    h4 {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`;

export const Value = styled.div`
  margin-top: 5px;
  font-size: 12px !important;
  color: ${({ clr }) => clr};
`;

export const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
`;
