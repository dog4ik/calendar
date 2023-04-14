import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
`;
const GridCol = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  display: flex;
  gap: 15px;
`;
const SideTime = styled.div`
  display: flex;
  transform: translateY(50%);
  justify-content: center;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
`;
const DayRow = styled.button`
  borderradius: 2px;
  background-color: red;
  border-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 2px;
  height: 50px;
`;
const Body = () => {
  return (
    <Container>
      <Grid>
        <GridCol>
          {[...Array(23)].map((_, i) => (
            <SideTime>{`${i}:00`}</SideTime>
          ))}
        </GridCol>
        {[...Array(7)].map((_, i) => (
          <GridCol key={i}>
            {[...Array(24)].map((_, j) => (
              <DayRow key={j}>{j + 1}</DayRow>
            ))}
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
};

export default Body;
