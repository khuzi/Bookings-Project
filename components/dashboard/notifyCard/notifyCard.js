import React from "react";

import { Typography } from "@material-ui/core";

export function NotifyCard({ txt1, txt2 }) {
  return (
    <div
      style={{
        padding: "0.5rem",
        background: "#fff",
        borderRadius: "8px",
        margin: "0.5rem 0",
      }}
    >
      <Typography variant="subtitle2">{txt1}</Typography>
      <Typography style={{ color: "#707070", fontSize: "10px" }}>
        {txt2}
      </Typography>
    </div>
  );
}
