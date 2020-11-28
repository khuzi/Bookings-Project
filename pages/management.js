import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Grid } from "@material-ui/core";

import { LgBtn, Spinner } from "../components/ui";
import { ManageCard } from "../components/management";

const Management = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [manageType, setManageType] = useState("locals");

  useEffect(() => {
    setLoading(true);
    const url = `http://nappetito-stage.herokuapp.com/api/${manageType}/5ec503cc434dff29cf56633b`;
    fetch(url)
      .then((response) => response.json())
      .then((contents) => {
        setLoading(false);
        setData(contents);
      })
      .catch(() => {
        setLoading(false);
        console.log("Can’t access " + url + " response. Blocked by browser?");
      });
  }, [manageType]);

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
      />
      {loading ? (
        <Spinner />
      ) : (
        <Grid container justify="space-between">
          <Grid item xs={5}>
            {data.map((item, i) => {
              return (
                <ManageCard key={i} rating={item.rating} name={item.name} />
              );
            })}
          </Grid>
          <Grid item xs={3}>
            <div>
              <h1>Hello</h1>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Management;
