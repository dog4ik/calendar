import { useCalendarContext } from "../../CalendarContext";
import Body from "./misc/Body";
import Footer from "./misc/Footer";
import Date from "./misc/Date";
import Header from "./misc/Header";
import Wrapper from "./misc/Wrapper";

const Calendar = () => {
  const { goToToday, selectedEvent, removeEvent } = useCalendarContext();

  return (
    <Wrapper>
      <Header />
      <Date />
      <Body />
      <Footer
        isSelected={!!selectedEvent}
        onToday={goToToday}
        onDelete={removeEvent}
      />
    </Wrapper>
  );
};

export default Calendar;
