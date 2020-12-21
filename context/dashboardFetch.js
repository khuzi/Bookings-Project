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

const fetcherReviews = async (url, setData) => {
  try {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const urll = url;
    const res = await fetch(proxyUrl + urll);
    const data = await res.json();
    setData(data);
  } catch (error) {
    console.log(error);
  }
};

export default function DashboardFetch({ children }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [reviews, setReviews] = useState();
  const [bookings, setBookings] = useState();
  const [completed, setCompleted] = useState();
  const [deleted, setDeleted] = useState();
  const [noShow, setNoShow] = useState();

  const [expReviews, setExpReviews] = useState();
  const [expBookings, setExpBookings] = useState();
  const [earnings, setEarnings] = useState();

  useEffect(() => {
    fetcherReviews(
      `http://nappetito-stage.herokuapp.com/api/reviewLocalTotalCount/5ec503cc434dff29cf56633b`,
      setReviews
    );

    fetcherReviews(
      "http://nappetito-stage.herokuapp.com/api/reviewExperienceTotalCount/5fa3eb9f9412c3fe0513ddc6",
      setExpReviews
    );

    fetcher("bookingLocalsTotalCount", startDate, endDate, setBookings);
    fetcher("bookingLocalsCompletedCount", startDate, endDate, setCompleted);
    fetcher("bookingLocalsDeletedCount", startDate, endDate, setDeleted);
    fetcher("bookingLocalsNoShowCount", startDate, endDate, setNoShow);

    fetcher("bookingExperiencesTotalCount", startDate, endDate, setExpBookings);
    fetcher("bookingExperiencesTotalGain", startDate, endDate, setEarnings);
  }, [startDate, endDate]);

  const local = [
    { src: "/images/stars.svg", txt: "Reviews", total: reviews },
    {
      src: "/images/bookings.svg",
      txt: "Bookings Total",
      total: bookings,
    },
    {
      src: "/images/book-comp.svg",
      txt: "Bookings Completed",
      total: completed,
    },
    { src: "/images/book-del.svg", txt: "Bookings Deleted", total: deleted },
    { src: "/images/book-noShow.svg", txt: "Bookings No-Show", total: noShow },
  ];

  const experience = [
    { src: "/images/stars.svg", txt: "Reviews", total: expReviews },
    {
      src: "/images/bookings.svg",
      txt: "Bookings Total",
      total: expBookings,
    },
    {
      src: "/images/earning.svg",
      txt: "Earnings",
      total: earnings,
    },
  ];

  return (
    <DashBordContext.Provider
      value={{
        setStartDate,
        setEndDate,
        local,
        experience,
      }}
    >
      {children}
    </DashBordContext.Provider>
  );
}
