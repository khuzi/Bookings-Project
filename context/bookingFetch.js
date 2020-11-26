import React, { useState, createContext, useEffect } from "react";

export const BookingContext = createContext();

export default function BookingFetch({ children }) {
  const [bookings, setBookings] = useState();
  const [completed, setCompleted] = useState();
  const [pending, setPending] = useState();
  const [noShow, setNoShow] = useState();
  const [deleted, setDeleted] = useState();
  const [bookingType, setBookingType] = useState("bookingLocals");

  const [bookingData, setBookingData] = useState();
  const [bookingHeader, setBookingHeader] = useState();

  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState("");

  const filter = (array, status, setFunc) => {
    const FilterArray = array.filter((el) => el.status === status);
    setFunc(FilterArray);
  };

  useEffect(() => {
    let bookingsKeys = [];
    let bookingsData = [];
    const fetcher = async () => {
      try {
        const newDate = new Date(date);
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://nappetito-stage.herokuapp.com/api/${bookingType}/5ec503cc434dff29cf56633b/${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}/all`;
        const res = await fetch(proxyUrl + url);
        const data = await res.json();
        setBookings(data);
        Object.values(data).forEach((el, i) => {
          if (i === 0) {
            Object.keys(el).forEach((key) => {
              bookingsKeys.push({ label: key, key: key });
            });
          }
          bookingsData.push(el);
        });
        setBookingData(bookingsData);
        setBookingHeader(bookingsKeys);
        filter(data, "deleted", setDeleted);
        filter(data, "pending", setPending);
        filter(data, "no-show", setNoShow);
        filter(data, "completed", setCompleted);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, [date, bookingType]);
  return (
    <BookingContext.Provider
      value={{
        bookings,
        date,
        setDate,
        deleted,
        pending,
        noShow,
        completed,
        bookingData,
        bookingHeader,
        month,
        setMonth,
        setBookingType,
        bookingType
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
