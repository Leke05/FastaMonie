import React from "react";
import styled from "styled-components";
import { JobContainer } from "../Utils";

const TalkingHome = () => {
  const customersdata = [
    {
      id: 1,
      comment:
        "Fusce scelerisque at nisl ut gravida. Pellentesque habitant morbitristique senectus et netus et malesuada fames ac turpis egestas. Fuscevitae neque sem. Fusce in massa ut arcu porta porttitor.",
      name: "Todd higgins",
      role: "Customers",
    },
    {
      id: 2,
      comment:
        "Fusce scelerisque at nisl ut gravida. Pellentesque habitant morbitristique senectus et netus et malesuada fames ac turpis egestas. Fuscevitae neque sem. Fusce in massa ut arcu porta porttitor.",
      name: "Todd higgins",
      role: "Customers",
    },
  ];

  const customerTemplate = customersdata?.map((customer) => {
    return (
      <CustomersCard key={customer.id}>
        <diV>{customer.comment}</diV>
        <div>
          <h6>{customer.name}</h6>
          <p className="text-muted">{customer.role}</p>
        </div>
      </CustomersCard>
    );
  });
  return (
    <TalkContainer>
      <div className="talk">
        <h4>
          What are they
          <br /> talking <br />
          about
        </h4>
        <p className="text muted">Trusted by more than 4,250 customers</p>
        <div className="icons">
          <i
            class="fa fa-arrow-left"
            aria-hidden="true"
            style={{ color: "#282828" }}
          ></i>
          <i
            class="fa fa-arrow-right"
            aria-hidden="true"
            style={{ color: "#282828" }}
          ></i>
        </div>
      </div>
      <JobContainer className="mb-3">{customerTemplate}</JobContainer>
    </TalkContainer>
  );
};

export default TalkingHome;
const TalkContainer = styled(JobContainer)`
  background-color: #fff;
  margin-bottom: 1rem;
  .talk {
    h4 {
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 0.5rem;
      text-align: center;
    }
    p {
      text-align: center;
    }

    .icons {
      display: flex !important;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
const CustomersCard = styled.div`
  background-color: #fafafa;
  /* border-radius: 0.8rem; */
  box-shadow: 0 4px 10px #ccccccfa;
  padding: 1rem;

  h6 {
    text-transform: uppercase;
    color: blue;
    letter-spacing: 1px;
    margin-top: 0.5rem;
  }
`;
