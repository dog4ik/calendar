import React from "react";
import styled from "styled-components";
import Body from "./misc/Body";
import Days from "./misc/Days";
import Footer from "./misc/Footer";
import Header from "./misc/Header";
import Wrapper from "./misc/Wrapper";

const Calendar = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer isSelected={true} onToday={() => null} onDelete={() => null} />
    </Wrapper>
  );
};

export default Calendar;
