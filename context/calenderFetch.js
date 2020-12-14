import React, { createContext, useState } from "react";

export const CalenderContext = createContext();

export default function CalenderFetch({ children }) {
  const [calType, setCalType] = useState("locals");
  const [showOptions, setShowOptions] = useState(false);
  const [menu, setMenu] = useState(false);
  const [detMenu, setDetMenu] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <CalenderContext.Provider
      value={{
        calType,
        showOptions,
        menu,
        detMenu,
        startDate,
        endDate,
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
