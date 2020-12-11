import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#fff",
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    borderRadius: "50%",
    backgroundColor: "var(--primary-color)",
  },
});

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

export function CustomizedCheckbox({ txt }) {
  return (
    <div>
      <FormControlLabel
        label={<p style={{ fontSize: "12px" }}>{txt}</p>}
        control={<StyledCheckbox />}
      />
    </div>
  );
}
