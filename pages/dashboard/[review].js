import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Typography } from "@material-ui/core";

import { CustomizedRatings } from "../../components/ui";
import { ReviewBox } from "../../components/reviews";

import classes from "../../styles/review.module.css";

const RatDescp = ({ reviewCount, title }) => {
  return (
    <Grid container justify="space-between" className={classes.ratDecp}>
      <Grid container item xs={6}>
        <Grid item xs={3}>
          {reviewCount === 0 ||
            (reviewCount > 0 && (
              <Typography variant="h5">{reviewCount}</Typography>
            ))}
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginTop: "0.4rem" }}>
            <CustomizedRatings max={5} revRat={`${reviewCount}`} size="small" />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography
          style={{ marginTop: "0.3rem" }}
          variant="subtitle1"
          align="right"
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default function Review({ reviewLocal, reviewExperience }) {
  const router = useRouter();

  const type = router.query.review;

  let reviewData = null;
  if (type === "local") {
    reviewData = reviewLocal;
  } else {
    reviewData = reviewExperience;
  }

  const [reviewsSimple, setReviewsSimple] = useState();
  const [reviewsBooking, setReviewsBooking] = useState();
  const [reviewsTotal, setReviewsTotal] = useState();

  useEffect(() => {
    router.reload();
  }, []);

  useEffect(() => {
    let id = "5ec503cc434dff29cf56633b";
    let typeFetch = "publicLocal";
    if (type === "experience") {
      id = "5fa3eb9f9412c3fe0513ddc6";
      typeFetch = "publicExperience";
    }
    fetch(`http://nappetito-stage.herokuapp.com/api/${typeFetch}Reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviewsSimple(data));
  }, [type]);

  useEffect(() => {
    let id = "5ec503cc434dff29cf56633b";
    let typeFetch = "bookingLocal";
    if (type === "experience") {
      id = "5fa3eb9f9412c3fe0513ddc6";
      typeFetch = "bookingExperience";
    }
    fetch(`http://nappetito-stage.herokuapp.com/api/${typeFetch}Reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviewsBooking(data));
  }, [type]);

  useEffect(() => {
    let id = "5ec503cc434dff29cf56633b";
    let typeFetch = "totalLocal";
    if (type === "experience") {
      id = "5fa3eb9f9412c3fe0513ddc6";
      typeFetch = "totalExperience";
    }
    fetch(`http://nappetito-stage.herokuapp.com/api/${typeFetch}Reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviewsTotal(data));
  }, [type]);

  const month_name = (dt) => {
    const date = new Date(dt);
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
    return `${date.getDate()}-${mlist[date.getMonth()].slice(
      0,
      3
    )}-${date.getFullYear()}`;
  };

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
          <Grid container item xs={8} className={classes.middle_main}>
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
              const {
                _id,
                postedByName,
                text,
                replied,
                createdAt,
                rating,
                comments,
              } = rev;
              return (
                <Grid item xs={12} key={_id}>
                  <ReviewBox
                    id={_id}
                    name={postedByName}
                    date={`${month_name(createdAt)} - Pick's Pub`}
                    ratText="Valutazione Complessiva"
                    review={text}
                    replied={replied}
                    revRat={rating}
                    comments={comments}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <div className={classes.ratingBox}>
              {[
                {
                  title: "Reviews",
                  ratings: reviewsSimple,
                },
                {
                  title: "Booking Reviews",
                  ratings: reviewsBooking,
                },
                {
                  title: "Total Reviews",
                  ratings: reviewsTotal,
                },
              ]?.map((item, i) => (
                <RatDescp
                  key={i}
                  title={item.title}
                  reviewCount={item.ratings}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = ["/dashboard/local", "/dashboard/experience"];
  return { paths, fallback: true };
}

export async function getStaticProps() {
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
