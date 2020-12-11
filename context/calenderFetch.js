import React, { createContext, useState } from "react";

export const CalenderContext = createContext();

export default function CalenderFetch({ children }) {
  const [calType, setCalType] = useState("locals");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <CalenderContext.Provider
      value={{
        calType,
        showOptions,
        setCalType,
        setShowOptions,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
}
