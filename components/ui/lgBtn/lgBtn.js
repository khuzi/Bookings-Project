import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
  btnExp: {
    background: "#fff !important",
    color: `${theme.palette.primary.main} !important`,
    border: "1px solid #000 !important",
    "&:hover": {
      background: `${theme.palette.primary.main} !important`,
      color: "#fff  !important",
      border: "none  !important",
    },
  },
  btn: {
    background: "#fff",
    padding: "0.1rem 1.5rem",
    background: theme.palette.primary.main,
    color: "#fff",
    border: "1px solid var(--primary-color)",
    "&:hover": {
      background: "#fff",
      color: theme.palette.primary.main,
      border: "1px solid #000",
    },
    width: "90%",
  },
}));

export const LgBtn = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={6} className={classes.root} alignContent="center">
      <Grid item xs={3}>
        <Button className={classes.btn}>Locals</Button>
      </Grid>
      <Grid item xs={3}>
        <Button className={`${classes.btnExp} ${classes.btn}`}>
          Experince
        </Button>
      </Grid>
    </Grid>
  );
};
