import styled from "styled-components";

const Years = () => {
  const textData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consecte",
    },
    {
      id: 2,
      text: "nisi metus. Praesent interdum elit nec dolor",
    },
    {
      id: 3,
      text: "nisi metus. Praesent interdum elit nec",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consecte",
    },
    {
      id: 5,
      text: "nisi metus. Praesent interdum elit nec dolor",
    },
  ];
  const textTemplate = textData?.map((item) => (
    <diV className="d-flex gap-3">
      <i className="fa fa-check text-primary"></i>
      <p className="text-muted">{item.text}</p>
    </diV>
  ));
  return (
    <YearContainer>
      <div>{textTemplate}</div>

      <div className="experirnce">
        <h6 className="pt-3" sty>
          30
        </h6>
        <p>
          Years of <br />
          Experience
        </p>
      </div>
    </YearContainer>
  );
};

export default Years;
const YearContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 10rem;
  .experirnce {
    width: 200px;
    height: 150px;
    background-color: #3c72fc;
    h6,
    p {
      text-align: center;
      color: #fff;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 769px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    .experirnce {
      width: 100px;
      height: 120px;
      background-color: #3c72fc;

      h6,
      p {
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
