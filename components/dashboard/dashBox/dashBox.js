import React from "react";

import { Typography } from "@material-ui/core";

import classes from "./dashBox.module.css";

const BoxItem = ({ src, txt, total }) => {
  return (
    <div className={classes.box}>
      <div className={classes.item}>
        <img
          style={txt === "Reviews" ? { width: "50px" } : { width: "20px" }}
          src={src}
        />
      </div>
      <div className={classes.item}>
        <p>{txt}</p>
      </div>
      <div className={classes.item}>
        {total || total === 0 ? (
          <h5>{total}</h5>
        ) : (
          <h5 style={{ fontSize: "16px" }}>Loading..!</h5>
        )}
      </div>
    </div>
  );
};

export function DashBox({ totalBookings, completed, deleted, noShow }) {
  const data = [
    { src: "/images/stars.svg", txt: "Reviews", total: "20" },
    {
      src: "/images/bookings.svg",
      txt: "Bookings Total",
      total: totalBookings,
    },
    {
      src: "/images/book-comp.svg",
      txt: "Bookings Completed",
      total: completed,
    },
    { src: "/images/book-del.svg", txt: "Bookings Deleted", total: deleted },
    { src: "/images/book-noShow.svg", txt: "Bookings No-Show", total: noShow },
  ];

  return (
    <div className={classes.dashBox}>
      <div>
        <Typography className={classes.box_title}>pick's pub</Typography>
      </div>
      <div className={classes.boxes}>
        {data.map((item, i) => (
          <BoxItem key={i} src={item.src} txt={item.txt} total={item.total} />
        ))}
      </div>
    </div>
  );
}
