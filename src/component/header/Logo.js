import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <img src="./images/logo.jpg" alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
const LogoContainer = styled.div`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "175px")};
  margin-inline: ${({ mx }) => mx};
  margin-bottom: ${({ mb }) => mb};

  img {
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
  }
`;
