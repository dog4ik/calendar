import React from "react";
import styled from "styled-components";
import { useCalendarContext } from "../../../CalendarContext";
import Button from "../../ui/Button";

const Container = styled.div`
  width: 90%;
  display: flex;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Line = styled.span`
  font-size: 1.2rem;
`;

const Header = () => {
  const { addEvent } = useCalendarContext();
  return (
    <Container>
      <Line>Interview Calendar</Line>
      <Button style={{ fontSize: "2rem" }} onClick={() => addEvent()}>
        +
      </Button>
    </Container>
  );
};

export default Header;
