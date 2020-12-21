import React, { useState } from "react";
import { useRouter } from "next/router";

import { Grid, Typography, Button } from "@material-ui/core";
import { CustomizedCheckbox, SimpleModal } from "../../ui";

import classes from "./options.module.css";

const EdDel = ({ del, clicked }) => {
  return (
    <a
      onClick={() => {
        if (!del && clicked) {
          clicked();
        }
      }}
      className={classes.edDel}
    >
      {del ? "Delete" : "Edit"}
    </a>
  );
};

const Availability = () => {
  return <CustomizedCheckbox />;
};

const BtnSave = ({ txt, btnClick }) => {
  return (
    <div style={{ marginTop: txt === "Save" ? "1rem" : "0.5rem" }}>
      <Button
        style={{
          width: "100%",
          boxShadow: "none",
          textTransform: "capitalize",
        }}
        variant="contained"
        color={txt === "Cancel" ? "" : "primary"}
        onClick={btnClick}
      >
        {txt}
      </Button>
    </div>
  );
};

const Local = ({ setMenu, menu, detMenu, setDetMenu }) => {
  const [open, setOpen] = useState(false);
  const [timings, setTimings] = useState("12:30 -> 15:00");

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  if (menu && !detMenu) {
    return (
      <div className={classes.menu}>
        <div className={classes.menu_input}>
          <input />
        </div>
        <BtnSave txt="Add Dish" btnClick={() => setDetMenu(true)} />
        <div className={classes.menu_gap}></div>
        <Grid container justify="space-between" className={classes.menu_price}>
          <Typography variant="subtitle1">Price:</Typography>
          <Typography variant="subtitle1"> 12 £</Typography>
        </Grid>
        <BtnSave txt="Save" />
        <BtnSave txt="Cancel" btnClick={() => router.push("/")} />
      </div>
    );
  }
  if (detMenu) {
    return (
      <>
        <div className={classes.menu_input} style={{ marginTop: "1rem" }}>
          <input placeholder="Add title here.." />
        </div>
        <div className={classes.det_txtArea}>
          <textarea placeholder="Add a decsription here (optional)" />
        </div>
        <div className={classes.menu_gap}></div>
        <BtnSave txt="Save" />
        <BtnSave txt="Cancel" btnClick={() => setDetMenu(false)} />
      </>
    );
  } else {
    return (
      <>
        <SimpleModal
          open={open}
          handleClose={handleClose}
          edit
          txt="Update Value"
          done="Done"
          cancel="Cancel"
          value={timings}
          setValue={setTimings}
        />
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">Close Specific Times</Typography>
          <EdDel clicked={() => setOpen(true)} />
        </Grid>
        <Grid container justify="space-between" style={{ marginTop: "1rem" }}>
          <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
            {timings}
          </Typography>
          <EdDel del />
        </Grid>
        <div style={{ margin: "1rem 0" }}>
          <Button
            style={{
              width: "100%",
              boxShadow: "none",
              textTransform: "capitalize",
            }}
            variant="contained"
            color="primary"
            onClick={() => setMenu(true)}
          >
            Add Menu of the day
          </Button>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Typography variant="subtitle1">Menu Of The Day:</Typography>
        </div>

        <Grid container justify="space-between">
          <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
            Lunch Menu : 12 £
          </Typography>
          <EdDel />
        </Grid>
        <Grid
          container
          justify="space-between"
          style={{ marginTop: "2rem" }}
          alignItems="center"
        >
          <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
            Availability Seats:
          </Typography>
          <div
            style={{
              background: "#fff",
              padding: "0.5rem",
              borderRadius: "5px",
              textAlign: "center",
              color: "var(--primary-color)",
            }}
          >
            20
          </div>
        </Grid>
        <BtnSave txt="Save" />
        <BtnSave txt="Cancel" />
      </>
    );
  }
};

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("15");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SimpleModal
        open={open}
        handleClose={handleClose}
        edit
        txt="Update Value"
        done="Done"
        cancel="Cancel"
        value={price}
        setValue={setPrice}
      />
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="h6">Availability Hours</Typography>
        <EdDel />
      </Grid>
      <Grid container justify="space-between" style={{ marginTop: "1rem" }}>
        <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
          19:00 - 21:00
        </Typography>
        <EdDel del />
      </Grid>
      <Availability />
      <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
        19:00 - 21:00
      </Typography>
      <Availability />
      <Grid container justify="space-between">
        <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
          Price : {price} £
        </Typography>
        <EdDel clicked={() => setOpen(true)} />
      </Grid>
      <BtnSave txt="Save" />
      <BtnSave txt="Cancel" />
    </>
  );
};

export function Options({ value }) {
  const {
    calType,
    menu,
    setMenu,
    detMenu,
    setDetMenu,
    startDate,
    endDate,
  } = value;
  let title = null;
  if (menu && !detMenu) {
    title = "Daily Menú";
  } else if (detMenu) {
    title = "Menú";
  } else {
    title = "Selected Dates";
  }
  return (
    <div className={classes.options}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle2" style={{ fontWeight: "lighter" }}>
        {!detMenu && startDate + " -> " + endDate}
      </Typography>

      {!menu && (
        <>
          <Grid container justify="space-between" style={{ margin: "1rem 0" }}>
            <Typography variant="subtitle2">
              <span style={{ fontWeight: "bold" }}>Discount</span> : 15%
            </Typography>
            <div>
              <EdDel />
              <EdDel del />
            </div>
          </Grid>
          <Typography variant="h6">Availability Day</Typography>
          <Availability />
        </>
      )}

      {calType === "locals" ? (
        <Local
          menu={menu}
          setMenu={() => setMenu(true)}
          detMenu={detMenu}
          setDetMenu={setDetMenu}
        />
      ) : (
        <Experience />
      )}
    </div>
  );
}
