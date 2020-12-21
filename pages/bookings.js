import React, { useContext, useReducer } from "react";
import Head from "next/head";

import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ListIcon from "@material-ui/icons/List";
import TableChartIcon from "@material-ui/icons/TableChart";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import IconButton from '@material-ui/core/IconButton';

import { SearchOutlined } from '@material-ui/icons';

import { PageTitle, LgBtn, DatePicker } from "../components/ui";
import { TabNav, ExportCSV } from "../components";

import { BookingContext } from "../context/bookingFetch";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  active: {
    padding: "0.3rem 0",
    background: theme.palette.primary.main,
    color: "#fff",
    textTransform: "uppercase",
    width: "3rem",
    textAlign: "center",
    fontSize: "8px",
    margin: "0.6rem 0 0.6rem 2rem",
    borderRadius: "5px",
  },
  normal: {
    padding: "0.3rem 0",
    background: "#fff",
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    border: "none",
    width: "3rem",
    textAlign: "center",
    fontSize: "8px",
    margin: "0.6rem 0 0.6rem 2rem",
    borderRadius: "5px",
  },
  listBox: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  title: {
    padding: "0 0.5rem",
    background: "#fff",
  },
  export: {
    background: "#00a20c",
    margin: "0 1rem",
    width: "5rem",
    color: "#fff",
    textTransform: "capitalize",
  },
  print: {
    border: "#00a20c",
    width: "5rem",
    textTransform: "capitalize",
    background: "#f6f6f6",
    color: "#00a20c",
    border: "1px solid #00a20c",
  },
  table: {
    background: "#fff",
    padding: "1rem",
  },
  cntrlBtn: {
    "& button": {
      textTransform: "capitalize",
      background: "#fff",
      border: "0.5px solid lightgray",
		borderRadius:"10px",
      textAlign: "center",
      width: "100%",
      Height: "100%",
      padding: "0.5rem 0",
      cursor: "pointer",
      outline: "none",

    },
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

  var search = "";

  const valueB = useContext(BookingContext);
  const { bookings, deleted, noShow, completed, pending, month, date, setDate, setMonth, setName,   setBookingType,
	  bookingType } = valueB;

	const month_name = (dt) => {
		const mlist = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return mlist[dt.getMonth()];
	};

	const handleToday = () => {
		setDate(new Date());
		const dateText = month_name(new Date()) + " " + new Date().getDate();
		setMonth(dateText);
	};

	const handleNext = () => {
		var next = date;
		next.setDate(date.getDate()+1);
		setDate(new Date(next));
		const dateText = month_name(next) + " " + next.getDate();
		setMonth(dateText);
	};

	const handlePrevious = () => {
		var previous = date;
		previous.setDate(date.getDate()-1);
		setDate(new Date(previous));
		const dateText = month_name(previous) + " " + previous.getDate();
		setMonth(dateText);
	};

	const handleName = () => {
		console.log(search);
		setName(search)
	}


  return (
    <>
      <Head>
        <title>Bookings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainWarper">
        <PageTitle text="Bookings" />
        <Grid container justify="space-between" alignItems="center">
          <LgBtn setBookingType={setBookingType} bookingType={bookingType} calender/>
          <Grid container item xs={6} justify="flex-end" alignItems="center">
            <Grid item>
              <input
                placeholder="Search for name"
				value={search}
                style={{
                  background: "#f6f6f6",
                  padding: "0.7rem",
                  border: "none",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
				<IconButton style={{ marginRight: "auto"}} onClick={handleName}>
					<SearchOutlined  />
				</IconButton>
              <Button className={classes.export}>Export</Button>
              <Button className={classes.print}>Print</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-between"
        style={{
          marginTop: "2rem",
          background: "#f6f6f6",
          padding: "1rem 0 0 2rem",
        }}
      >
        <Grid item xs={2}>
          <Typography style={{ color: "var(--primary-color)" }} variant="h5">
            {month}
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid container item  spacing={2} xs={3}>
          <Grid item xs={4} className={classes.cntrlBtn}>
            <button onClick={() => handleToday()}>Today</button>
          </Grid>
          <Grid item xs={4} className={classes.cntrlBtn}>
            <button onClick={() => handlePrevious()}>Previous</button>
          </Grid>
          <Grid item xs={4} className={classes.cntrlBtn}>
            <button onClick={() => handleNext()}>Next</button>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid
        container
        style={{
          background: "#f6f6f6",
          padding: "1rem 2rem 2rem 0",
        }}
      >
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
            <Typography style={{ background: "#fff" }} variant="h5">
              Booking List
            </Typography>
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
