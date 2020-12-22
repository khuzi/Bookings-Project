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
  const {
    calType,
    setShowOptions,
    setStartDate,
    setEndDate,
    experienceData,
  } = useContext(CalenderContext);

  const month_name = (dt) => {
    const mlist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return mlist[dt.getMonth()].slice(0, 3);
  };

	const handleSelect = ({ start, end }) => {
		console.log(start);
		console.log(end);
		setShowOptions(true);
		setStartDate(`${day_name(start)}, ${month_name(start)} ${start.getDate()}`);
		setEndDate(`${day_name(end)}, ${month_name(end)} ${end.getDate()}`);


	}
  const day_name = (dt) => {
    const dlist = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return dlist[dt.getDay()].slice(0, 3);
  };

  const onEvent = (e) => {
    console.log(e);
    const start = new Date(e.start);
    const end = new Date(e.end);
    setShowOptions(true);
    setStartDate(`${day_name(start)}, ${month_name(start)} ${start.getDate()}`);
    setEndDate(`${day_name(end)}, ${month_name(end)} ${end.getDate()}`);
  };

  return (
    <div className="rbCalender">
      <Calendar selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={calType === "locals" ? localEvents : experienceData}
        style={{ height: "100vh" }}
        onSelectEvent={onEvent}
				onSelectSlot={handleSelect}
      />
    </div>
  );
};
