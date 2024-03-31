import styled from "styled-components";

const Consulting = () => {
  const data = [
    {
      id: 1,
      img: "./images/path.png",
      value: 420,
      text: "Consulting Solutions",
    },
    {
      id: 2,
      img: "./images/path.png",
      value: 420,
      text: "Consulting Solutions",
    },
    {
      id: 3,
      img: "./images/path.png",
      value: 420,
      text: "Consulting Solutions",
    },
    {
      id: 4,
      img: "./images/path.png",
      value: 420,
      text: "Consulting Solutions",
    },
  ];
  const consultTemplate = data.map((item) => {
    return (
      <div className="content">
        <div className="p-3">
          <div className="image">
            <img src={item.img} alt="path" />
          </div>
          <div>
            <h6>{item.value}</h6>
            <p>{item.text}</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    );
  });

  return <Container>{consultTemplate}</Container>;
};

export default Consulting;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  gap: 4px;
  .image {
    width: 50px;
    aspect-ratio: 1;
    background-color: #06050c;
    margin: auto;
    img {
      width: 100%;
    }
  }
  h6 {
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }
  p {
    color: #fff;
    font-weight: bold;
    /* text-transform: uppercase; */
    /* letter-spacing: 1px; */
  }
  .line {
    width: 0.06%;
    height: 120px;
    border: 1px solid #fff;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    .image {
      width: 40px;
      aspect-ratio: 1;
      background-color: #06050c;
      background-size: cover;
      img {
        width: 100%;
      }
    }
  }
`;
