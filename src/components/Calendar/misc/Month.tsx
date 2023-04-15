import styled from "styled-components";
import { useCalendarContext } from "../../../CalendarContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Arrow = styled.button`
  color: red;
  font-size: 1.2rem;
  font-weight: 400;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
`;
const Text = styled.div`
  font-weight: 400;
  color: black;
  font-size: 1rem;
`;
const Month = ({ date }: { date: string }) => {
  const { forwardCurrentDate, backCurrentDate } = useCalendarContext();
  return (
    <Container>
      <Arrow onClick={backCurrentDate}>{"<"}</Arrow>
      <Text>{date}</Text>
      <Arrow onClick={forwardCurrentDate}>{">"}</Arrow>
    </Container>
  );
};

export default Month;
