import React, { useEffect, createContext, useState } from "react";

export const DashBordContext = createContext();

const fetcher = (endpoint, startDate, endDate, setData) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/http://nappetito-stage.herokuapp.com/api/${endpoint}`,
    {
      method: "POST",
      body: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
        userId: "5ec503cc434dff29cf56633b",
      }),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .then((result) => {
      setData(result);
    })
    .catch((err) => console.log("Error = ", err));
};

export default function DashboardFetch({ children }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bookings, setBookings] = useState();
  const [completed, setCompleted] = useState();
  const [deleted, setDeleted] = useState();
  const [noShow, setNoShow] = useState();

  useEffect(() => {
    fetcher("bookingLocalsTotalCount", startDate, endDate, setBookings);
    fetcher("bookingLocalsCompletedCount", startDate, endDate, setCompleted);
    fetcher("bookingLocalsDeletedCount", startDate, endDate, setDeleted);
    fetcher("bookingLocalsNoShowCount", startDate, endDate, setNoShow);
  }, [bookings, completed, deleted, noShow, startDate, endDate]);
  return (
    <DashBordContext.Provider
      value={{ bookings, completed, deleted, noShow, setStartDate, setEndDate }}
    >
      {children}
    </DashBordContext.Provider>
  );
}
