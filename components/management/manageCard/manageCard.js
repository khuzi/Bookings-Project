import React from "react";

import { Grid, Typography } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";

import { CustomizedRatings } from "../../ui";

import classes from "./manageCard.module.css";

export function ManageCard({ id, rating, name, detailsHandler }) {
  return (
    <Grid container className={classes.card}>
      <Grid item xs={6} className={classes.image}>
        <div className={classes.tag}>29&#8356;/pc</div>
        <img src="/images/1.jpg" />
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "1rem" }}>
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "600", fontSize: "large" }}
        >
          {name}
        </Typography>
        <div className={classes.durat}>
          <div className={classes.duration}>
            <HistoryIcon color="primary" />
            <Typography variant="subtitle1">Duration 3 hrs</Typography>
          </div>
          <div className={classes.rating}>
            <CustomizedRatings rating={rating} />
            <Typography>{rating}</Typography>
          </div>
        </div>
        <div className={classes.controls}>
          <div>
            <a href="#">Edit</a>
          </div>
          <div>Delete</div>
          <div onClick={() => detailsHandler(id)}>Details</div>
        </div>
      </Grid>
    </Grid>
  );
}
