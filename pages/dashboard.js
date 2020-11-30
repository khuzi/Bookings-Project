import React, { useContext } from "react";
import Head from "next/head";

import { DashBordContext } from "../context/dashboardFetch";

import { Grid, Typography, Button } from "@material-ui/core";

import { DashBox } from "../components";
import { CustomizedSelects } from "../components/ui";

import classes from "../styles/dashboard.module.css";

export default function dashboard() {
  const { bookings, completed, deleted, noShow } = useContext(DashBordContext);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={classes.dashboard}>
        <Grid container justify="space-between" className={classes.top}>
          <Grid item xs={3} className={classes.top_img}>
            <img src="/images/dash-top.svg" />
          </Grid>
          <Grid item xs={4} className={classes.top_content}>
            <Typography variant="h6">
              Inizia ad accettare le prenotazioni su Eatfood
            </Typography>
            <div className={classes.top_btn}>
              <Button>Combia Piano</Button>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.middle}>
          <Grid container item xs={9} className={classes.middle_main}>
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Typography
                  className={classes.middle_main_heading}
                  variant="h5"
                >
                  dashboard
                </Typography>
              </Grid>
              <Grid xs={2} className={classes.middle_main_select}>
                <CustomizedSelects />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <DashBox
                totalBookings={bookings}
                completed={completed}
                deleted={deleted}
                noShow={noShow}
              />
              <DashBox
                totalBookings={bookings}
                completed={completed}
                deleted={deleted}
                noShow={noShow}
              />
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </>
  );
}
