import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Grid } from "@material-ui/core";

import { LgBtn, Spinner } from "../components/ui";
import { ManageCard, ManageDetails } from "../components/management";

const Management = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [manageType, setManageType] = useState("locals");
  const [details, setDetails] = useState();

  useEffect(() => {
    setLoading(true);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://nappetito-stage.herokuapp.com/api/${manageType}/5ec503cc434dff29cf56633b`;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((contents) => {
        setLoading(false);
        setData(contents);
      })
      .catch(() => {
        setLoading(false);
        console.log("Can’t access " + url + " response. Blocked by browser?");
      });
    setDetails(null);
  }, [manageType]);

  const detailsHandler = (id) => {
    setDetails(data.filter((items) => items._id === id));
  };

  return (
    <>
      <Head>
        <title>Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LgBtn
        bookingType={manageType}
        setBookingType={setManageType}
        management={true}
        col={6}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Grid container justify="space-between">
          <Grid item xs={5}>
            {data.map((item, i) => {
              return (
                <ManageCard
                  key={i}
                  rating={item.rating}
                  name={item.name}
                  id={item._id}
                  detailsHandler={detailsHandler}
                />
              );
            })}
          </Grid>
          <Grid item xs={4}>
            {details &&
              details.map((item) => <ManageDetails key={item._id} {...item} />)}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Management;
