import React from "react";

import { Typography, Grid, Button } from "@material-ui/core";

import { CustomizedRatings } from "../../ui";

import classes from "./reviewBox.module.css";

export function ReviewBox({ name, date, review, ratText, replied }) {
  return (
    <div className={classes.reviewBox}>
      <Typography variant="h5">{name}</Typography>
      <Typography style={{ color: "var(--primary-color)" }} variant="subtitle2">
        {date}
      </Typography>
      <div className={classes.rat}>
        <Typography style={{ fontWeight: "600" }} variant="subtitle1">
          {ratText}
        </Typography>
        <div style={{ marginTop: "0.15rem" }}>
          <CustomizedRatings size="small" max={5} rating="5" />
        </div>
      </div>
      <Typography style={{ maxWidth: "90%" }} variant="subtitle2">
        {review}
      </Typography>
      <Grid container justify="flex-end">
        <Button className={classes.ans_btn}>
          {replied ? "Answer" : "See Answer"}
        </Button>
      </Grid>
    </div>
  );
}
