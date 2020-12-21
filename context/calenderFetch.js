import React, { createContext, useState, useEffect } from "react";

export const CalenderContext = createContext();

export default function CalenderFetch({ children }) {
  const [calType, setCalType] = useState("locals");
  const [showOptions, setShowOptions] = useState(false);
  const [menu, setMenu] = useState(false);
  const [detMenu, setDetMenu] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://nappetito-stage.herokuapp.com/api/calendar/experience/5ec503cc434dff29cf56633b?startDate=01-12-2020&endDate=31-12-2020"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Calender Data = ", data);
          setExperienceData(data);
        })
        .catch((err) => console.log("Calender Error = ", err));
    };
    fetcher();
  }, []);

  return (
    <CalenderContext.Provider
      value={{
        calType,
        showOptions,
        menu,
        detMenu,
        startDate,
        endDate,
        experienceData,
        setCalType,
        setShowOptions,
        setMenu,
        setDetMenu,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
}
