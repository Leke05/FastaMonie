import "./App.css";
import styled from "styled-components";
import HeaderSection from "./component/header/HeaderSection";
import Experience from "./component/Experience";
import LeadingIndex from "./component/market/LeadingIndex";
import Study from "./component/stydy/Study";
import MissionHome from "./component/mission/MissionHome";
import TalkingHome from "./component/globalcomponents/talking/TalkingHome";
import Solutions from "./component/solutions/Solutions";
import Success from "./component/success/SuccesIndex";
import Footer from "./component/footer/Footer";
import { useState } from "react";

function App() {
  return (
    <Container>
      <HeaderSection />
      <Experience />
      <LeadingIndex />
      <Study />
      <MissionHome />
      <TalkingHome />
      <Solutions />
      <Success />
      <Footer />
    </Container>
  );
}

export default App;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #0f0d1d;
`;
