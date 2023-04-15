import React from "react";
import styled from "styled-components";
import { useCalendarContext } from "../../../CalendarContext";
import Days from "./Days";
import Month from "./Month";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: lavender;
  background-color: whitesmoke;
`;
const Date = () => {
  const { getCurrentMonth, getWeekDates } = useCalendarContext();
  return (
    <Wrapper>
      <div style={{ marginLeft: "14%", width: "86%" }}>
        <Days dates={getWeekDates()} />
        <Month date={getCurrentMonth()} />
      </div>
    </Wrapper>
  );
};

export default Date;
