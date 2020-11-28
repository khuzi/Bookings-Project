import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";

export function CustomizedRatings() {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          style={{ color: "var(--primary-color)" }}
          name="customized-empty"
          readOnly
          max={1}
          precision={0.5}
          value={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}
