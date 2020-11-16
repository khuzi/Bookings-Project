import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { Typography } from "@material-ui/core";

export function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid item xs={6}>
        <div className="date-picker">
          <KeyboardDatePicker
            keyboardIcon={<CalendarTodayOutlinedIcon color="primary" />}
            margin="normal"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right" }}>
        <Typography variant="h5">
          {`${selectedDate.getDate()}
          ${month_name(new Date(selectedDate))}`}
        </Typography>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
