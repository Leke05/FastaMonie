import styled from "styled-components";

const Success = () => {
  const successData = [
    {
      id: 1,
      name: "success",
      heading: "Highest success rates",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisiligula, tincidunt eget maximus et, tincidunt eget nisl. Nullamfermentum iaculis turpis lobortis vehicula",
      image: "/images/feather.png",
    },
    {
      id: 2,
      name: "build",
      heading: "We build experiences",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisiligula, tincidunt eget maximus et, tincidunt eget nisl. Nullamfermentum iaculis turpis lobortis vehicula",
      image: "/images/feather.png",
    },
  ];

  const templates = successData.map((item) => {
    return (
      <div className="rate" key={item}>
        <div className="success">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <h4>{item.heading}</h4>
        </div>
        <p className="text-muted">{item.text}</p>
      </div>
    );
  });

  const textdata = [
    {
      id: 1,
      name: "If you are going to use a passage",
    },
    {
      id: 2,
      name: "Lorem ipsum you need to be sure",
    },
    {
      id: 3,
      name: "There isn't anything embrassing",
    },
    {
      id: 4,
      name: "Hidden in middle of text",
    },
  ];
  const textTemplate = textdata?.map((text) => {
    return (
      <div key={text.id} className="d-flex gap-3">
        <i
          class="fa fa-minus"
          aria-hidden="true"
          style={{ color: "#78ceff", marginTop: "5px" }}
        ></i>
        <p className="mb-2">{text.name}</p>
      </div>
    );
  });
  return (
    <Container>
      <RateContainer>{templates}</RateContainer>
      <div className="d-flex gap-3">
        <div className="break"></div>
        <div className="variation">
          <div className="text">
            There are many variations of passages of lorem ipsum availabe, but
            thr majority have suffered alteration in some form injected humuor
            or randomised words which don't look believable
          </div>
          <div className="mt-5">{textTemplate}</div>
        </div>
      </div>
    </Container>
  );
};

export default Success;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  gap: 3rem;
  padding: 1rem;
  .success {
    display: flex;
    gap: 10px;
    h4 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
    }
  }

  .break {
    width: 0.01;
    height: 300px;
    border: 0.5px solid #838194;
  }

  .variation {
    text-align: center;

    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 20px;
      max-height: 100px;
      padding: 4px 10px;
      max-width: 400px;
      letter-spacing: 1px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;
const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 1rem;
  gap: 1rem;

  .rate {
    background-color: #fafafa;
    border-radius: 0.8rem;
    box-shadow: 0 4px 10px #ccccccfa;
    padding: 1rem;
    h4 {
      text-align: center;
    }
  }
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
