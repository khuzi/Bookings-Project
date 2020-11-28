import React, { useEffect, useState } from "react";

import { LgBtn, Spinner } from "../components/ui";
import { ManageCard } from "../components/management";

const Management = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [manageType, setManageType] = useState("locals");

  useEffect(() => {
    setLoading(true);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://nappetito-stage.herokuapp.com/api/${manageType}/5ec503cc434dff29cf56633b`;
    fetch(url)
      .then((response) => response.json())
      .then((contents) => {
        setLoading(false);
        setData(contents);
      })
      .catch(() => {
        setLoading(false);
        console.log("Can’t access " + url + " response. Blocked by browser?");
      });
  }, []);

  return (
    <div>
      <LgBtn />
      {loading ? (
        <Spinner />
      ) : (
        data.map((item, i) => {
          return <ManageCard key={i} rating={item.rating} name={item.name} />;
        })
      )}
    </div>
  );
};

export default Management;
