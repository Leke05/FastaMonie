import { Stack } from "@mui/material";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgessBar = ({ value, heading, status }) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <ProgressBar now={value} />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          <span>{heading}</span>
        </p>
        <p>
          <span>{status}</span>
        </p>
      </div>
    </Stack>
  );
};

export default ProgessBar;
