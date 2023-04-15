import { useState } from "react";
import "./App.css";
import CalendarProvider from "./CalendarContext";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <Calendar />
      </CalendarProvider>
    </div>
  );
}

export default App;
