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
      style={{ background: "#fff", minHeight: "81px" }}
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
    backgroundColor: "#fff",
    marginTop: "0.5rem",
    "& .MuiTab-textColorInherit.Mui-selected": {
      background: theme.palette.primary.main,
      color: "#fff",
      padding: 0,
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
  appbar: {
    background: "#fff",
    boxShadow: "none",
  },
  tab: {
    color: "#000",
    fontSize: "14px",
    minHeight: "2rem",
    textTransform: "capitalize",
    border: '1px solid #eee'
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
          <Tab className={classes.tab} label="All" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Completed" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Deleted" {...a11yProps(2)} />
          <Tab className={classes.tab} label="No-Show" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Pending" {...a11yProps(4)} />
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
              status={item.status}
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
            status={item.status}
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
            status={item.status}
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
            status={item.status}
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
            status={item.status}
          />
        ))}
      </TabPanel>
    </div>
  );
}
