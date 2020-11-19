import React, { Component } from "react";
import { CSVLink } from "react-csv";

import BookingContext from "../../../context/bookingFetch";

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" },
];

const data = [
  {
    firstName: "Warren",
    lastName: "Morrow",
    email: "sokyt@mailinator.com",
    age: "36",
  },
  {
    firstName: "Gwendolyn",
    lastName: "Galloway",
    email: "weciz@mailinator.com",
    age: "76",
  },
  {
    firstName: "Astra",
    lastName: "Wyatt",
    email: "quvyn@mailinator.com",
    age: "57",
  },
  {
    firstName: "Jasmine",
    lastName: "Wong",
    email: "toxazoc@mailinator.com",
    age: "42",
  },
  {
    firstName: "Brooke",
    lastName: "Mcconnell",
    email: "vyry@mailinator.com",
    age: "56",
  },
  {
    firstName: "Christen",
    lastName: "Haney",
    email: "pagevolal@mailinator.com",
    age: "23",
  },
  {
    firstName: "Tate",
    lastName: "Vega",
    email: "dycubo@mailinator.com",
    age: "87",
  },
  {
    firstName: "Amber",
    lastName: "Brady",
    email: "vyconixy@mailinator.com",
    age: "78",
  },
  {
    firstName: "Philip",
    lastName: "Whitfield",
    email: "velyfi@mailinator.com",
    age: "22",
  },
  {
    firstName: "Kitra",
    lastName: "Hammond",
    email: "fiwiloqu@mailinator.com",
    age: "35",
  },
  {
    firstName: "Charity",
    lastName: "Mathews",
    email: "fubigonero@mailinator.com",
    age: "63",
  },
];

export class ExportCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvReport: {
        data: [],
        headers: [],
        filename: "Report.csv",
      },
    };
  }

  static contextType = BookingContext;

  componentDidUpdate() {
    console.log(this.context.bookingHeader);
  }

  downloadReport = (event, done) => {
    // API call to get data
    const objReport = {
      filename: "Clue_Mediator_Report_Async.csv",
      headers: JSON.stringify(this.context.bookingHeader),
      data: JSON.stringify(this.contextbookingData),
    };
    this.setState({ csvReport: objReport }, () => {
      done();
    });
  };

  render() {
    return (
      <CSVLink
        {...this.state.csvReport}
        asyncOnClick={true}
        onClick={this.downloadReport}
      >
        Export to CSV (Async)
      </CSVLink>
    );
  }
}
