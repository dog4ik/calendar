import styled from "styled-components";
import { useCalendarContext } from "../../../CalendarContext";

type DayProps = {
  isSelected: boolean;
  haveEvent: boolean;
};

const Grid = styled.div`
  width: 100%;
  height: fit-content;
  flex: 1;
  display: flex;
  background-color: lightgray;
  gap: 2px;
`;
const GridCol = styled.div`
  width: 14.285714285%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 2px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  gap: 2px;
`;

const SideTime = styled.div`
  display: flex;
  transform: translateY(50%);
  font-size: 0.75rem;
  justify-content: center;
  color: gray;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
`;
const Day = styled.button<DayProps>`
  borderradius: 2px;
  background-color: ${(props) =>
    props.haveEvent ? (props.isSelected ? "lightblue" : "lavender") : "white"};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 3px solid;
  border-color: white;
  height: 50px;
  }
`;
const Body = () => {
  const { getEventsForWeek, selectEvent, selectedEvent } = useCalendarContext();
  console.log(getEventsForWeek());
  let events = getEventsForWeek().map((item) => {
    let day = item.date.getDay();
    if (day == 0) day = 6;
    else day--;

    return {
      day: day,
      hour: item.date.getHours(),
      id: item.eventId,
    };
  });
  return (
    <Container>
      <GridCol style={{ backgroundColor: "white" }}>
        {[...Array(23)].map((_, i) => (
          <SideTime key={i}>{`${i + 1}:00`}</SideTime>
        ))}
      </GridCol>
      <Grid>
        {[...Array(7)].map((_, i) => (
          <GridCol key={i}>
            {[...Array(24)].map((_, j) => {
              let event = events.find(
                (item) => item.day == i && item.hour === j
              );
              return (
                <Day
                  key={j}
                  isSelected={event ? event.id == selectedEvent : false}
                  onClick={() => (event ? selectEvent(event.id) : null)}
                  haveEvent={event !== undefined}
                />
              );
            })}
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
};

export default Body;
