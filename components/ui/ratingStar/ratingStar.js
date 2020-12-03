import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";

export function CustomizedRatings({ rating }) {
  let value = null;
  if (rating === 5) {
    value = 1;
  } else {
    value = 0.5;
  }
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          style={{ color: "var(--primary-color)" }}
          name="customized-empty"
          readOnly
          max={1}
          precision={0.5}
          value={value}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}
