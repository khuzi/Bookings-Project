import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { CustomizedCheckbox } from "../../ui";

import classes from "./options.module.css";

const EdDel = ({ del }) => {
  return <a className={classes.edDel}>{del ? "Delete" : "Edit"}</a>;
};

const Availability = () => {
  return (
    <Grid container justify="space-between" className={classes.availability}>
      <Grid item xs={3}>
        <CustomizedCheckbox txt="Availability" />
      </Grid>
      <Grid item xs={3}>
        <CustomizedCheckbox txt="Blocked" />
      </Grid>
    </Grid>
  );
};

const Local = () => {
  return (
    <>
      <Grid container justify="space-between">
        <Typography variant="h6">Close Specific Times</Typography>
        <EdDel />
      </Grid>
      <Grid container justify="space-between" style={{ marginTop: "1rem" }}>
        <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
          12:30 - 15:00
        </Typography>
        <EdDel del />
      </Grid>
      <div style={{ margin: "1rem 0" }}>
        <Button
          style={{
            width: "100%",
            boxShadow: "none",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="primary"
        >
          Add Menu of the day
        </Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Typography variant="subtitle1">Menu Of The Day:</Typography>
      </div>

      <Grid container justify="space-between">
        <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
          Lunch Menu : 12 £
        </Typography>
        <EdDel />
      </Grid>
      <Grid
        container
        justify="space-between"
        style={{ marginTop: "2rem" }}
        alignItems="center"
      >
        <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
          Availability Seats:
        </Typography>
        <div
          style={{
            background: "#fff",
            padding: "0.5rem",
            borderRadius: "5px",
            textAlign: "center",
            color: "var(--primary-color)",
          }}
        >
          20
        </div>
      </Grid>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="h6">Availability Hours</Typography>
        <EdDel />
      </Grid>
      <Grid container justify="space-between" style={{ marginTop: "1rem" }}>
        <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
          19:00 - 21:00
        </Typography>
        <EdDel del />
      </Grid>
      <Availability />
      <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
        19:00 - 21:00
      </Typography>
      <Availability />
      <Grid container justify="space-between">
        <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
          Price : 15 £
        </Typography>
        <EdDel />
      </Grid>
    </>
  );
};

export function Options({ optionType }) {
  return (
    <div className={classes.options}>
      <Typography variant="h6">Selected Dates</Typography>
      <Typography
        variant="subtitle2"
        style={{ marginTop: "-0.5rem", fontWeight: "lighter" }}
      >
        Fri, Nov 13 - Mon, Nov 16
      </Typography>
      <Grid container justify="space-between" style={{ margin: "1rem 0" }}>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: "bold" }}>Discount</span> : 15%
        </Typography>
        <div>
          <EdDel />
          <EdDel del />
        </div>
      </Grid>
      <Typography variant="h6">Availability Day</Typography>
      <Availability />

      {optionType === "locals" ? <Local /> : <Experience />}

      <div style={{ marginTop: "1rem" }}>
        <Button
          style={{
            width: "100%",
            boxShadow: "none",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <Button
          style={{
            width: "100%",
            boxShadow: "none",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
