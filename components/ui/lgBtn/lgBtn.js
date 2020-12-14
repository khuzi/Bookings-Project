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
    color: "var(--primary-color)",
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

export const LgBtn = ({
  showOptions,
  setShowOptions,
  setBookingType,
  bookingType,
  calender,
  management,
  col,
}) => {
  const classes = useStyles();

  let local = "bookingLocals";
  let experience = "bookingExperiences";

  if (management) {
    local = "locals";
    experience = "experiences";
  }

  return (
    <Grid
      container
      item
      xs={col}
      className={classes.root}
      alignContent="center"
    >
      <Grid item xs={2}>
        <Button
          onClick={() => {
            setBookingType(local);
            if (showOptions) {
              setShowOptions(false);
            }
          }}
          className={bookingType === local ? classes.active : classes.btn}
        >
          Locals
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => {
            setBookingType(experience);
            if (showOptions) {
              setShowOptions(false);
            }
          }}
          className={bookingType === experience ? classes.active : classes.btn}
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
