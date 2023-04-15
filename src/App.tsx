import { useState } from "react";
import "./App.css";
import CalendarProvider from "./CalendarContext";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  );
}

export default App;
