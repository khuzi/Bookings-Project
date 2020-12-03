import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

import { DashBordContext } from "../../../context/dashboardFetch";

const BootstrapInput = withStyles((theme) => ({
  input: {
    minWidth: "8rem",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    border: "none",
    fontSize: 14,
    padding: "10px 26px 10px 5px",
    color: "#fff",
    "&:focus": {
      background: theme.palette.primary.main,
      borderRadius: "4px",
    },
  },
}))(InputBase);

const onStartEnd = (date, month, year) => {
  return `${year}-${month}-${date}`;
};

export function CustomizedSelects() {
  const [date, setDate] = React.useState("today");

  const { setStartDate, setEndDate } = useContext(DashBordContext);

  useEffect(() => {
    console.log("Date = ", date);
  }, [date]);

  const dateHandler = (event) => {
    const newDate = new Date();
    const value = event.target.value;
    switch (value) {
      case "today":
        setStartDate(
          onStartEnd(
            newDate.getDate(),
            newDate.getMonth() + 1,
            newDate.getFullYear()
          )
        );
        setEndDate(
          onStartEnd(
            newDate.getDate(),
            newDate.getMonth() + 1,
            newDate.getFullYear()
          )
        );
        break;
      case "current":
        setStartDate(
          onStartEnd("01", newDate.getMonth() + 1, newDate.getFullYear())
        );
        setEndDate(
          onStartEnd("30", newDate.getMonth() + 1, newDate.getFullYear())
        );
        break;
      case "three":
        setStartDate(
          onStartEnd("01", newDate.getMonth() - 2, newDate.getFullYear())
        );
        setEndDate(
          onStartEnd("30", newDate.getMonth() + 1, newDate.getFullYear())
        );
        break;
      case "six":
        setStartDate(
          onStartEnd("01", newDate.getMonth() - 5, newDate.getFullYear())
        );
        setEndDate(
          onStartEnd("30", newDate.getMonth() + 1, newDate.getFullYear())
        );
        break;
      case "year":
        setStartDate(onStartEnd("01", "01", newDate.getFullYear() - 1));
        setEndDate(onStartEnd("30", "12", newDate.getFullYear() - 1));
        break;
      default:
        break;
    }
    setDate(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <NativeSelect
          id="demo-customized-select-native"
          value={date}
          onChange={dateHandler}
          input={<BootstrapInput />}
        >
          <option style={{ color: "#000" }} value={"today"}>
            Today
          </option>
          <option style={{ color: "#000" }} value={"current"}>
            Current Month
          </option>
          <option style={{ color: "#000" }} value={"three"}>
            Last Three Months
          </option>
          <option style={{ color: "#000" }} value={"six"}>
            Last 6 Months
          </option>
          <option style={{ color: "#000" }} value={"year"}>
            Last Year
          </option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
