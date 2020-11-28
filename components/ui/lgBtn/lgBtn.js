import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";

import { DatePicker } from "../";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
  btn: {
    width: "100%",
    padding: "0.5rem 0",
    textTransform: "capitalize",
    background: "#f6f6f6",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    color: "#000",
    "&:hover": {
      background: "#f6f6f6",
    },
  },
  active: {
    width: "100%",
    color: "#fff",
    background: theme.palette.primary.main,
    width: "100%",
    padding: "0.5rem 0",
    textTransform: "capitalize",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    "&:hover": {
      background: "var(--primary-color)",
    },
  },
}));

export const LgBtn = ({ setBookingType, bookingType, calender }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={6} className={classes.root} alignContent="center">
      <Grid item xs={2}>
        <Button
          onClick={() => setBookingType("bookingLocals")}
          className={
            bookingType === "bookingLocals" ? classes.active : classes.btn
          }
        >
          Locals
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => setBookingType("bookingExperiences")}
          className={
            bookingType === "bookingExperiences" ? classes.active : classes.btn
          }
        >
          Experince
        </Button>
      </Grid>
      <Grid item xs={2}>
        <div
          style={{
            margin: "0.5rem auto",
          }}
        >
          {calender && <DatePicker />}
        </div>
      </Grid>
    </Grid>
  );
};
