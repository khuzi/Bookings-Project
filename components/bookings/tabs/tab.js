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

export function TabNav({ bookings, pending, deleted, noShow, completed }) {
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
          <Tab className={classes.tab} label="PENDING" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {bookings ? (
          bookings.map((item) => (
            <TabAccordion
              key={item._id}
              ore={item.hours}
              persons={item.persons}
              name={item.name}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Loading...!</p>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {completed?.map((item) => (
          <TabAccordion
            key={item._id}
            ore={item.hours}
            persons={item.persons}
            name={item.name}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {deleted?.map((item) => (
          <TabAccordion
            key={item._id}
            ore={item.hours}
            persons={item.persons}
            name={item.name}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {noShow?.map((item) => (
          <TabAccordion
            key={item._id}
            ore={item.hours}
            persons={item.persons}
            name={item.name}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {pending?.map((item) => (
          <TabAccordion
            key={item._id}
            ore={item.hours}
            persons={item.persons}
            name={item.name}
          />
        ))}
      </TabPanel>
    </div>
  );
}
