import React, { useState } from "react";

import { CustomizedRatings } from "../../ui";

import classes from "./reviewTab.module.css";

export default function ReviewTab() {
  const [activeItem, setActiveItem] = useState("Tutto");

  return (
    <div className={classes.tutto}>
      {["Tutto", 5, 4, 3, 2, 1].map((el, i) => (
        <div
          key={i}
          className={activeItem === el && classes.active}
          onClick={() => setActiveItem(el)}
        >
          <div className={classes.rat_num}>{el}</div>
          <div className={classes.rat_star}>
            <CustomizedRatings
              rating={5}
              size="small"
              color={activeItem === el && "#fff"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
