import { Grid } from "@material-ui/core";
import React from "react";

import classes from "./manageDetailas.module.css";

const Content = ({ hd, txt }) => {
  return (
    <div className={classes.content}>
      <p>{hd} </p>&nbsp;
      <p>{txt}</p>
    </div>
  );
};

export function ManageDetails({ name, rating, address, phone }) {
  return (
    <div className={classes.details}>
      <Content hd="Name:" txt={name} />
      <Content hd="Category:" txt="Pub" />
      <br />
      <Content hd="Address:" txt={address} />
      <Content hd="City:" txt="London" />
      <Content hd="Email:" txt="epub@pub.com" />
      <Content hd="Phone:" txt={phone} />
      <Content hd="Website:" txt="www.site.it" />
      <br />
      <Content hd="Average Price:" txt="29&#8356;" />
      <Content hd="Open Days:" txt="Everyday" />
      <Content hd="Hours:" txt="17:00 - > 19:00" />
      <Content
        hd="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        txt="19:00 - > 21:00"
      />
      <br />
      <Content hd="Language:" txt="English , Italian" />
      <Content
        hd="Fixed Menu:"
        txt="Lunch Menu &#8356;12 , Sunday Menu &#8356;20"
      />
      <br />
      <Content hd="Rating:" txt={rating} />
      <Content hd="Photos:" txt="" />
      <div className={classes.images}>
        <img src="/images/1.jpg" />
        <img src="/images/1.jpg" />
        <img src="/images/1.jpg" />
        <img src="/images/1.jpg" />
      </div>
    </div>
  );
}
