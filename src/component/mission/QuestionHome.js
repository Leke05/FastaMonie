import React from "react";
import { JobContainer, PageHeading } from "../globalcomponents/Utils";
import Form from "./Form";
import styled from "styled-components";
import Years from "./Years";

const QuestionHome = () => {
  const formData = [
    {
      id: 1,
      value: "1.",
      text: "There are many variations of passages the majority have suffered alterations in some fo injected humour, or randomized words belivable",
      heading: "Think ahead and boost your business?",
    },
    {
      id: 2,
      value: "2.",
      heading: "How consultancy experts work?",
    },
    {
      id: 3,
      value: "3.",
      heading: "What is the best advices for growth?",
    },
    {
      id: 4,
      value: "4.",
      heading: "How to improve your business?",
    },
  ];
  return (
    <div className="bg-light pt-3">
      <div>
        <PageHeading>Question Answers</PageHeading>
        <p className="text-muted">We help our clients renew their business</p>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <FormContainer>
            {formData.map((item) => (
              <Form item={item} key={item?.id} />
            ))}
          </FormContainer>
        </div>
        <Years />
      </div>
    </div>
  );
};

export default QuestionHome;

const FormContainer = styled(JobContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
`;
