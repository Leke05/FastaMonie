import styled from "styled-components";
import ProgessBar from "../globalcomponents/ProgessBar";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Professional = () => {
  const value = 80;
  return (
    <div className="pt-3, pl-3 mt-3">
      <h3 className="fw-bold" style={{ textTransform: "uppercase" }}>
        We're the leading in <br /> the market
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        nisi metus. Praesent interdum elit nec dolor luctus sollicitudin.
        Pellentesque imperdiet, risus vel consequat condimentum, sapien turpis
        semper turpis, varius gravida mauris magna non est. Vestibulum porttitor
        elit dolor. Vestibulum finibus lectus vitae magna imperdiet commodo.
        Integer eget aliquet erat. Sed vitae arcu eget velit faucibus pulvinar.
        Fusce scelerisque at nisl ut gravida. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        vitae neque sem. Fusce in massa ut arcu porta porttitor.
      </p>
      <p className="text-primary">
        We have 35+ years of experience. We offer <br />
        marketing and consulting services
      </p>
      <ProgessBar value={value} heading="CONSULTING" status="88%" />
      <ProgessBar value={value} heading="ADVICES" status="60%" />
      <div className="d-flex gap-2">
        <MdOutlinePhoneInTalk size={40} />
        <div>
          <p className="text-muted">Have any questions? Give us a call</p>
          <p>
            <span className="fw-bold">+92 666 888 0000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
