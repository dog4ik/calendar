import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: evenly;
  align-tems: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const DayCirle = styled.div`
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: green;
`;
const Days = () => {
  const days = ["M", "T", "W", "F", "S", "S"];
  return (
    <Container>
      {days.map((day) => (
        <Day>
          <span>{day}</span>
          <DayCirle>{29}</DayCirle>
        </Day>
      ))}
    </Container>
  );
};

export default Days;
