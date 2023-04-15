import React from "react";
import styled from "styled-components";
import { useCalendarContext } from "../../../CalendarContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  width: 14%;
  gap: 3px;
`;
const DayCirle = styled.div<{ isToday: boolean }>`
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  font-size: 1rem;
  background-color: ${(props) => (props.isToday ? "red" : "transparent")};
  color: ${(props) => (props.isToday ? "white" : "black")};
`;
const Days = ({ dates }: { dates: { date: number; fullDate: string }[] }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  let currentDate = new Date().toDateString();
  return (
    <Container>
      {days.map((day, i) => (
        <Day key={i}>
          <span>{day}</span>
          <DayCirle isToday={currentDate == dates[i].fullDate}>
            {dates[i].date}
          </DayCirle>
        </Day>
      ))}
    </Container>
  );
};

export default Days;
