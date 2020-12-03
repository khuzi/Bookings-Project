import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Typography } from "@material-ui/core";

import { CustomizedRatings } from "../../components/ui";
import { ReviewBox } from "../../components/reviews";

import classes from "../../styles/review.module.css";

export default function Review({ reviewLocal, reviewExperience }) {
  const router = useRouter();

  let reviewData = null;
  if (router.query.review === "local") {
    reviewData = reviewLocal;
  } else {
    reviewData = reviewExperience;
  }

  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      <div className={classes.review}>
        <div className={classes.tutto}>
          <div>Tutto</div>
          {[5, 4, 3, 2, 1].map((el, i) => (
            <div key={i}>
              <div className={classes.rat_num}>{el}</div>
              <div className={classes.rat_star}>
                <CustomizedRatings rating={5} size="small" />
              </div>
            </div>
          ))}
        </div>
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
                  reviews
                </Typography>
              </Grid>
            </Grid>
            {reviewData?.map((rev) => {
              const { _id, postedByName, text, replied } = rev;
              return (
                <Grid item xs={12} key={_id}>
                  <ReviewBox
                    name={postedByName}
                    date="15 Oct - 18 Oct 2020 - Pick's Pub"
                    ratText="Valutazione Complessiva"
                    review={text}
                    replied={replied}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = ["/dashboard/local", "/dashboard/experience"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;

  const local = await fetch(
    "http://nappetito-stage.herokuapp.com/api/reviewsLocal/5ec503cc434dff29cf56633b"
  );
  const reviewLocal = await local.json();

  const experience = await fetch(
    `http://nappetito-stage.herokuapp.com/api/reviewsExperience/5fa3eb9f9412c3fe0513ddc6`
  );
  const reviewExperience = await experience.json();

  return {
    props: {
      reviewLocal,
      reviewExperience,
    },
  };
}
