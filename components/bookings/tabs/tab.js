import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { TabAccordion } from "../";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    background: "#fff",
    border: "1px solid #000",
    boxShadow: "none",
  },
  tab: {
    color: "#000",
    fontWeight: "600",
    fontSize: "16px",
  },
}));

export function TabNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab className={classes.tab} label="ALL" {...a11yProps(0)} />
          <Tab className={classes.tab} label="COMPLETED" {...a11yProps(1)} />
          <Tab className={classes.tab} label="DELETED" {...a11yProps(2)} />
          <Tab className={classes.tab} label="NO-SHOW" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TabAccordion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabAccordion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabAccordion />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabAccordion />
      </TabPanel>
    </div>
  );
}
