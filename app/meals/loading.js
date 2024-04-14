import React from "react";
import classes from "./loading.module.css";

function loading() {
  return (
    <div className={classes.loading}>Fetching data, Please Wait 🙂...</div>
  );
}

export default loading;
