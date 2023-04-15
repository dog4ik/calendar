const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
import { createContext, ReactNode, useContext, useState } from "react";
import { v4 } from "uuid";

type ContextType = {
  events: CalendarEvent[];
  addEvent: () => void;
  removeEvent: () => void;
  getCurrentMonth: () => string;
  forwardCurrentDate: () => void;
  backCurrentDate: () => void;
  goToToday: () => void;
  getWeekDates: () => { date: number; fullDate: string }[];
  getEventsForWeek: () => CalendarEvent[];
  selectEvent: (id: string) => void;
  selectedEvent?: string;
  currentDate: Date;
};
type CalendarEvent = {
  eventId: string;
  date: Date;
};

export const CalendarContext = createContext<ContextType>({} as ContextType);

function initDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  //Sunday=0 Monday=1
  while (date.getDay() != 1) {
    date.setDate(date.getDate() - 1);
  }
  return date;
}

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>();
  const [currentDate, setCurrentDate] = useState<Date>(initDate());
  function addEvent() {
    const date = prompt("Event date:");
    try {
      if (date) {
        const parsedDate = Date.parse(date);
        if (isNaN(parsedDate)) throw Error("invalid date");
        setCalendarEvents((prev) => [
          ...prev,
          { eventId: v4(), date: new Date(parsedDate) },
        ]);
      }
    } catch (_) {
      alert("wrong date");
    }
  }

  function getWeekDates() {
    let date = new Date(currentDate.getTime());
    let dates = [...Array(7)].map((_, i) => {
      if (i == 0)
        return { date: date.getDate(), fullDate: date.toDateString() };
      date.setDate(date.getDate() + 1);
      return { date: date.getDate(), fullDate: date.toDateString() };
    });
    return dates;
  }
  function getCurrentMonth() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return `${months[month]} ${year}`;
  }

  function getEventsForWeek() {
    return calendarEvents.filter((item) => {
      let eventTimeStamp = item.date.getTime();
      let currentTimeStamp = currentDate.getTime();
      let weekInMs = 1000 * 60 * 60 * 24 * 7;
      let diff = currentTimeStamp + weekInMs - eventTimeStamp;
      return diff >= 0 && diff <= weekInMs;
    });
  }

  function forwardCurrentDate() {
    setCurrentDate((prev) => {
      let date = new Date(prev.getTime());
      date.setDate(prev.getDate() + 7);
      return new Date(date);
    });
    setSelectedEvent(undefined);
  }
  function backCurrentDate() {
    setCurrentDate((prev) => {
      let date = new Date(prev.getTime());
      date.setDate(prev.getDate() - 7);
      return new Date(date);
    });
    setSelectedEvent(undefined);
  }

  function selectEvent(id: string) {
    setSelectedEvent(id);
  }

  function goToToday() {
    setCurrentDate(initDate());
  }

  function removeEvent() {
    if (selectedEvent) {
      setCalendarEvents((prev) =>
        prev.filter((item) => item.eventId != selectedEvent)
      );
      setSelectedEvent(undefined);
    }
  }
  return (
    <CalendarContext.Provider
      value={{
        selectedEvent,
        events: calendarEvents,
        removeEvent,
        addEvent,
        selectEvent,
        getCurrentMonth,
        getWeekDates,
        getEventsForWeek,
        backCurrentDate,
        forwardCurrentDate,
        goToToday,
        currentDate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => useContext(CalendarContext);
export default CalendarProvider;
