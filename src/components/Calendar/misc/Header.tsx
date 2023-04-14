import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  alignitems: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Line = styled.span`
  font-size: 25px;
`;

const Header = () => {
  return (
    <Container>
      <Line>Interview calendar</Line>
      <Button>+</Button>
    </Container>
  );
};

export default Header;
