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
    background: theme.palette.primary.main,
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  exp: {
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
}));

export const LgBtn = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={6} className={classes.root} alignContent="center">
      <Grid item xs={2}>
        <Button className={classes.btn}>Locals</Button>
      </Grid>
      <Grid item xs={2}>
        <Button className={classes.exp}>Experince</Button>
      </Grid>
      <Grid item xs={2}>
        <div
          style={{
            margin: "0.5rem auto",
          }}
        >
          <DatePicker />
        </div>
      </Grid>
    </Grid>
  );
};
