import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
  },
];

export const MyCalender = () => {
  return (
    <div className="rbCalender">
      <Calendar
        localizer={localizer}
        defaultDate={new Date("2021-06-30T14:22:12.673Z")}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
    </div>
  );
};
