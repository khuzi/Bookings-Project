import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Typography } from "@material-ui/core";

import Calender from "../calenderModal/calenderModal";

export function CalenderModal({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ background: "#f6f6f6", padding: "0 1rem" }}>
          <DialogTitle id="alert-dialog-title">{"Add Promotions"}</DialogTitle>
          <DialogContent>
            <Calender />
          </DialogContent>
          <Grid container justify="center">
            <Typography variant="subtitle1">Discount: 15%</Typography>
          </Grid>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{
                width: "100%",
                background: "var(--primary-color)",
                color: "#fff",
                textTransform: "capitalize",
                marginBottom: "3rem",
              }}
            >
              Save
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
