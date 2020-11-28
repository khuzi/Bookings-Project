import React from "react";

import { Grid, Typography } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";

import { CustomizedRatings } from "../../ui";

import classes from "./manageCard.module.css";

export function ManageCard() {
  return (
    <Grid container className={classes.card}>
      <Grid item xs={6} className={classes.image}>
        <div className={classes.tag}>29&#8356;/pc</div>
        <img src="/images/1.jpg" />
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "1rem" }}>
        <Typography variant="h6">Street Food Festival</Typography>
        <div className={classes.durat}>
          <div className={classes.duration}>
            <HistoryIcon />
            <Typography variant="subtitle1">Duration 3 hrs</Typography>
          </div>
          <div className={classes.rating}>
            <CustomizedRatings />
            <Typography>3.8</Typography>
          </div>
        </div>
        <div className={classes.controls}>
          <div>
            <a href="#">Edit</a>
          </div>
          <div>Delete</div>
          <div>Details</div>
        </div>
      </Grid>
    </Grid>
  );
}
