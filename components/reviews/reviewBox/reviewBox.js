import React from "react";

import { Typography, Grid } from "@material-ui/core";

import { CustomizedRatings } from "../../ui";
import { Answer } from "../";

import classes from "./reviewBox.module.css";

export function ReviewBox({
  name,
  date,
  review,
  ratText,
  revRat,
  comments,
  id,
}) {
  const [answers, setAnswers] = React.useState();
  React.useEffect(() => {
    const text = comments.map(({ text }) => text);
    setAnswers(text);
  }, [comments]);

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
          <CustomizedRatings size="small" max={5} revRat={revRat} />
        </div>
      </div>
      <Typography style={{ maxWidth: "90%" }} variant="subtitle2">
        {review}
      </Typography>
      <Grid container justify="flex-end">
        <Answer answer={answers} id={id} />
      </Grid>
    </div>
  );
}
