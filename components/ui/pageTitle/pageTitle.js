import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
  },
}));

export const PageTitle = ({ text }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h5">
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
