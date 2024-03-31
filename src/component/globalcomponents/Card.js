import React from "react";
import { CardBody, CardContainer, Value } from "./Utils";

const Card = ({ job }) => {
  return (
    <CardContainer>
      <CardBody>
        <div
          style={{
            width: "30px",
            aspectRatio: 1,
            backgroundColor: "#ebf1ff",
            paddingLeft: "5px",
          }}
        >
          <span style={{ color: "#99b5fe" }}>{job?.value}</span>
        </div>
        <div>
          <h4 style={{ fontWeight: "900" }}>{job?.heading}</h4>
          <Value className="text-muted">{job?.text}</Value>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
