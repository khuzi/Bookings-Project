import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";

import { tableHead } from "../../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "bold",
  },
  accordion: {
    borderRadius: "10px !important",
    border: "1px solid #fff",
    boxShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
  },
  th: {
    background: "#ccc",
  },
  tHeading: {
    padding: "0.5rem 0",
    fontWeight: "bold",
    fontSize: "14px",
  },
  tCell: {
    padding: "0.5rem 0",
  },
  edit: {
    color: "var(--primary-color)",
    paddingTop: "10px",
    cursor: "pointer",
  },
  status: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
}));

export function TabAccordion() {
  const classes = useStyles();
  const [border, setBorder] = useState(false);
  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        style={
          border
            ? { borderColor: "var(--primary-color)" }
            : { borderColor: "#fff" }
        }
        onClick={() => setBorder((prevBorder) => !prevBorder)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ padding: 0 }}
          onClick={() => setBorder(false)}
        >
          <Grid container>
            <Grid container item xs={12} className={classes.th}>
              {tableHead.map((item, i) => (
                <Grid key={i} item xs={item.col}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.tHeading}
                  >
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={1}>
                <div className={classes.status}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#00D147",
                    }}
                  ></div>
                </div>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  className={classes.tCell}
                >
                  4
                </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={1}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  className={classes.tCell}
                >
                  De Viro R.
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={1}>
                <Typography align="center">
                  <i className={`far fa-edit ${classes.edit}`}></i>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
