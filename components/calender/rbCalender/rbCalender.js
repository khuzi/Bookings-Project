import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalenderContext } from "../../../context/calenderFetch";

const localizer = momentLocalizer(moment);

const localEvents = [
  {
    start: new Date("12-08-2020"),
    end: moment().add(0, "days").toDate(),
    title: "Local",
  },
];

const experienceEvents = [
  {
    start: new Date("12-04-2020"),
    end: moment().add(0, "days").toDate(),
    title: "Experience",
  },
];

export const MyCalender = () => {
  const { calType } = useContext(CalenderContext);

  return (
    <div className="rbCalender">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={calType === "locals" ? localEvents : experienceEvents}
        style={{ height: "100vh" }}
        // onSelectEvent={(e) => {
        //   alert("Heelo");
        //   console.log("Event = ", e);
        // }}
      />
    </div>
  );
};
