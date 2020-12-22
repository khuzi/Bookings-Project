import React, { useContext } from "react";

import "date-fns";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { BookingContext } from "../../../context/bookingFetch";

export function DatePicker() {
  const value = useContext(BookingContext);
  const { date, setDate, setMonth, month } = value;

  React.useEffect(() => {
    const dateText = month_name(new Date()) + " " + new Date().getDate();
    setMonth(dateText);
    console.log(month);
  }, []);

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
    return mlist[dt.getMonth()];
  };

  const handleDateChange = (dat) => {
    setDate(dat);
    const dateText = month_name(new Date(dat)) + " " + dat.getDate();
    setMonth(dateText);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid item xs={6}>
        <div className="date-picker">
          <KeyboardDatePicker
            keyboardIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 60 60"
              >
                <g
                  id="Group_14365"
                  data-name="Group 14365"
                  transform="translate(-541.25 -144.75)"
                >
                  <path
                    id="Path_14888"
                    data-name="Path 14888"
                    d="M34.114,0H5.386A5.393,5.393,0,0,0,0,5.386V34.114A5.394,5.394,0,0,0,5.386,39.5H34.114A5.394,5.394,0,0,0,39.5,34.114V5.386A5.394,5.394,0,0,0,34.114,0ZM37.7,34.114A3.6,3.6,0,0,1,34.114,37.7H5.386A3.6,3.6,0,0,1,1.8,34.114V5.386A3.6,3.6,0,0,1,5.386,1.8H34.114A3.6,3.6,0,0,1,37.7,5.386Z"
                    transform="translate(541.5 145)"
                    fill="#e72311"
                    stroke="#e72311"
                    strokeWidth="0.5"
                  />
                  <ellipse
                    id="Ellipse_3550"
                    data-name="Ellipse 3550"
                    cx="1.524"
                    cy="1.524"
                    rx="1.524"
                    ry="1.524"
                    transform="translate(551.047 151.17)"
                    fill="#e72311"
                  />
                  <ellipse
                    id="Ellipse_3551"
                    data-name="Ellipse 3551"
                    cx="1.524"
                    cy="1.524"
                    rx="1.524"
                    ry="1.524"
                    transform="translate(559.727 151.17)"
                    fill="#e72311"
                  />
                  <ellipse
                    id="Ellipse_3552"
                    data-name="Ellipse 3552"
                    cx="1.524"
                    cy="1.524"
                    rx="1.524"
                    ry="1.524"
                    transform="translate(568.404 151.17)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2864"
                    data-name="Rectangle 2864"
                    width="5.501"
                    height="4.893"
                    transform="translate(554.827 160.443)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2865"
                    data-name="Rectangle 2865"
                    width="5.5"
                    height="4.893"
                    transform="translate(562.172 160.443)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2866"
                    data-name="Rectangle 2866"
                    width="5.501"
                    height="4.893"
                    transform="translate(569.514 160.443)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2867"
                    data-name="Rectangle 2867"
                    width="5.5"
                    height="4.891"
                    transform="translate(547.484 166.976)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2868"
                    data-name="Rectangle 2868"
                    width="5.501"
                    height="4.891"
                    transform="translate(554.827 166.976)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2869"
                    data-name="Rectangle 2869"
                    width="5.5"
                    height="4.891"
                    transform="translate(562.172 166.976)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2870"
                    data-name="Rectangle 2870"
                    width="5.501"
                    height="4.891"
                    transform="translate(569.514 166.976)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2871"
                    data-name="Rectangle 2871"
                    width="5.5"
                    height="4.891"
                    transform="translate(547.484 173.507)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2872"
                    data-name="Rectangle 2872"
                    width="5.501"
                    height="4.891"
                    transform="translate(554.827 173.507)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2873"
                    data-name="Rectangle 2873"
                    width="5.5"
                    height="4.891"
                    transform="translate(562.172 173.507)"
                    fill="#e72311"
                  />
                  <rect
                    id="Rectangle_2874"
                    data-name="Rectangle 2874"
                    width="5.501"
                    height="4.891"
                    transform="translate(569.514 173.507)"
                    fill="#e72311"
                  />
                </g>
              </svg>
            }
            margin="normal"
            value={date}
            onChange={handleDateChange}
            format="yyyy-MM-ddd"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
