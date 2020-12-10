import React from "react";
import Head from "next/head";

import { Grid, Button } from "@material-ui/core";

import { PageTitle, LgBtn } from "../components/ui";

import classes from "../styles/calender.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle text="Calender" />
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <LgBtn calender />
        </Grid>
        <Grid container item xs={2} justify="flex-end" alignItems="center">
          <Button className={classes.promo_btn}>Promotions</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.middleWarper}>
        <Grid item xs={9} className={classes.calenderBox}></Grid>
        <Grid item xs={3}>
          <div className={classes.optionsBox}></div>
        </Grid>
      </Grid>
    </>
  );
}
