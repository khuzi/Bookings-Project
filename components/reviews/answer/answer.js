import React from "react";
import { useRouter } from "next/router";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordion: {
    width: "100%",
    boxShadow: "none",
    boder: "none",
  },
  summary: {
    width: "18%",
    background: "var(--primary-color)",
    color: "#fff",
    borderRadius: "5px",
    marginLeft: "82%",
  },
  heading: {
    fontSize: "14px",
  },
  details: {
    borderRadius: "8px",
    marginTop: "0.5rem",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.1)",
  },
  message: {
    display: "flex",
    flexFlow: "column",
    padding: "0.5rem 0",
    width: "100%",
    "& textarea": {
      height: "100px",
      borderRadius: "8px",
      padding: "0.5rem",
      border: "1px solid #bbb",
      resize: "none",
      outline: "none",
    },
  },
  btnSend: {
    marginTop: "0.5rem",
    background: "var(--primary-color)",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      background: "var(--primary-color)",
    },
  },
}));

export function Answer({ answer, id }) {
  const classes = useStyles();
  const router = useRouter();

  const [message, setMessage] = React.useState("");

  const sendResult = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://nappetito-stage.herokuapp.com/api/review",
      {
        method: "POST",
        body: JSON.stringify({
          reviewId: id,
          userId: "5ec503cc434dff29cf56633b",
          message: message,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("res send = ", response);
        router.reload();
      })
      .catch((err) => {
        console.log("Error = ", err);
        router.reload();
      });
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {answer && answer[0] ? "See Answer" : "Answer"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {answer && answer[0] ? (
            answer.map((commit, i) => <Typography key={i}>{commit}</Typography>)
          ) : (
            <div className={classes.message}>
              <textarea
                placeholder="Enter Answer"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={() => sendResult()} className={classes.btnSend}>
                Send
              </Button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
