import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function SimpleModal({
  open,
  handleClose,
  txt = " Are You Sure..?",
  done = " Agree",
  cancel = "Disagree",
  edit,
  value,
  setValue,
}) {
  const [initial, setInitial] = useState(value);
  const statusHandler = () => {
    setValue(initial);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-title">{txt}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {edit && (
              <input
                onChange={(e) => setInitial(e.target.value)}
                placeholder="Enter new value"
                value={initial}
                style={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "5px",
                  outline: "none",
                  padding: "0.5rem",
                  width: "100%",
                }}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancel}
          </Button>
          <Button onClick={statusHandler} color="primary">
            {done}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
