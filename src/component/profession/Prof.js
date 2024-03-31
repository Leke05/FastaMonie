import { JobContainer } from "../globalcomponents/Utils";
import Card from "../globalcomponents/Card";

const Prof = () => {
  const profData = [
    {
      id: 1,
      heading: "GET PROFESSIONAL ADVICES",
      text: "There are many variations of the available but majority may have suffered alterations",
      value: "01",
    },
    {
      id: 2,
      heading: "TRUSTED & PROFESSIONAL",
      text: "There are many variations of the available but majority may have suffered alterations",
      value: "02",
    },
  ];
  return (
    <JobContainer>
      {profData.map((job) => (
        <Card job={job} key={job.id} />
      ))}
    </JobContainer>
  );
};

export default Prof;
