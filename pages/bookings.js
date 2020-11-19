import React, { useContext, useReducer } from "react";
import Head from "next/head";

import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ListIcon from "@material-ui/icons/List";
import TableChartIcon from "@material-ui/icons/TableChart";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";

import { PageTitle, LgBtn, DatePicker } from "../components/ui";
import { TabNav, ExportCSV } from "../components";

import { BookingContext } from "../context/bookingFetch";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    marginTop: "2rem",
  },
  active: {
    padding: "0.3rem 0",
    background: theme.palette.secondary.main,
    color: "#fff",
    textTransform: "uppercase",
    width: "3.5rem",
    border: "2px solid #fff",
    textAlign: "center",
    fontSize: "10px",
    margin: "0.3rem 0 0.3rem 1.8rem",
  },
  normal: {
    padding: "0.3rem 0",
    background: theme.palette.secondary.main,
    color: "#fff",
    textTransform: "uppercase",
    border: "none",
    transform: "scale(1.2)",
    width: "3rem",
    textAlign: "center",
    fontSize: "8px",
    margin: "0.3rem 0 0.3rem 2rem",
  },
  listBox: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  table: {
    border: "1px solid #000",
  },
  title: {
    border: "1px solid #000",
    padding: "0 0.5rem",
  },
  export: {
    border: "2px solid #555",
    margin: '0 1rem',
    width: '5rem'
  },
  print: {
    border: "2px solid lightblue",
    width: '5rem'
  },
}));

const vTabReducer = (currStatus, action) => {
  switch (action.type) {
    case "list":
      return { list: true, timeline: false, grid: false };
    case "timeline":
      return { list: false, timeline: true, grid: false };
    case "grid":
      return { list: false, timeline: false, grid: true };
    default:
      throw new Error("Should not reached...");
  }
};

const TableBox = ({ status, type, text, dispatch, Icon }) => {
  const boxClasses = useStyles();

  return (
    <div
      className={status ? boxClasses.active : boxClasses.normal}
      onClick={() => dispatch({ type: type })}
    >
      <div className={boxClasses.listBox}>
        <Icon />
        {text}
      </div>
    </div>
  );
};

const Bookings = () => {
  const classes = useStyles();
  const [vTabStatus, statusDispatch] = useReducer(vTabReducer, {
    list: true,
    timeline: false,
    grid: false,
  });

  const valueB = useContext(BookingContext);
  const { bookings, deleted, noShow, completed, pending } = valueB;

  return (
    <>
      <Head>
        <title>Bookings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainWarper">
        <PageTitle text="Booking" />
        <Grid container justify="space-between" alignItems="center">
          <LgBtn />
          <Grid container item xs={6} justify="flex-end" alignItems="center">
            <Grid item>
              <Button className={classes.export}>Export</Button>
              <Button className={classes.print}>Print</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.datePicker}>
          <Grid
            container
            item
            xs={6}
            justify="space-between"
            alignItems="center"
          >
            <DatePicker />
          </Grid>
        </Grid>
      </div>
      <Grid container style={{ marginTop: "2rem" }}>
        <Grid item xs={1}>
          <TableBox
            text="List"
            type="list"
            status={vTabStatus.list}
            dispatch={statusDispatch}
            Icon={ListIcon}
          />
          <TableBox
            text="Timeline"
            type="timeline"
            status={vTabStatus.timeline}
            dispatch={statusDispatch}
            Icon={TableChartIcon}
          />
          <TableBox
            text="Grid"
            type="grid"
            status={vTabStatus.grid}
            dispatch={statusDispatch}
            Icon={ViewColumnIcon}
          />
        </Grid>
        <Grid item xs={11} className={classes.table}>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h4">BOOKING LIST</Typography>
          </Grid>
          <Grid item xs={12}>
            <TabNav
              bookings={bookings}
              pending={pending}
              deleted={deleted}
              noShow={noShow}
              completed={completed}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Bookings;
