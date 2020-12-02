import React from "react";
import Link from "next/link";

import { Typography } from "@material-ui/core";

import classes from "./dashBox.module.css";

const BoxItem = ({ src, txt, total, id }) => {
  let width = null;
  let see = null;
  let margin = 0;

  if (txt === "Reviews") {
    see = "See Reviews";
  } else if (txt === "Bookings Total") {
    see = "See Bookings";
  }

  if (txt === "Reviews") {
    width = "50px";
  } else if (txt === "Earnings") {
    width = "38px";
    margin = "0.5rem";
  } else {
    width = "20px";
  }
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <div className={classes.box}>
        <div className={classes.item}>
          <img style={{ width: width, marginLeft: margin }} src={src} />
        </div>
        <div className={classes.item}>
          <p>{txt}</p>
        </div>
        <div className={classes.item}>
          {total || total === 0 ? (
            <h5>{total}</h5>
          ) : (
            <h5 style={{ fontSize: "16px" }}>...</h5>
          )}
        </div>
      </div>
      {see && (
        <div className={classes.item}>
          <Link href="/dashboard/[review]" as={`/dashboard/${id}`}>
            <a
              style={{
                color: "var(--primary-color)",
                textDecoration: "underline",
                fontSize: "11px",
              }}
            >
              {see}
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export function DashBox({ data, title, id }) {
  return (
    <div className={classes.dashBox}>
      <div>
        <Typography className={classes.box_title}>{title}</Typography>
      </div>
      <div className={classes.boxes}>
        {data?.map((item, i) => (
          <BoxItem
            key={i}
            id={id}
            src={item.src}
            txt={item.txt}
            total={item.total}
          />
        ))}
      </div>
    </div>
  );
}
