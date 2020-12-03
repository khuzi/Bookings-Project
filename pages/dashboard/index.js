import React, { useContext } from "react";
import Head from "next/head";

import { DashBordContext } from "../../context/dashboardFetch";

import { Grid, Typography, Button } from "@material-ui/core";

import { DashBox, NotifyCard } from "../../components";
import { CustomizedSelects } from "../../components/ui";

import classes from "../../styles/dashboard.module.css";

export default function dashboard() {
  const { experience, local } = useContext(DashBordContext);
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
              <Grid item xs={2} className={classes.middle_main_select}>
                <CustomizedSelects />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <DashBox
                data={local}
                title="pick's pub"
                id="local"
              />
              <DashBox
                data={experience}
                title="street food experience"
                id="experience"
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.notifyBox}>
              <Typography className={classes.middle_main_heading} variant="h">
                notify
              </Typography>
              {[1, 2, 3].map((_, i) => (
                <NotifyCard
                  key={i}
                  txt1="Read the review that Shopie left you."
                  txt2="3 days ago"
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
