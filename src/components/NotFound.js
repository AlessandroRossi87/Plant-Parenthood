import React from "react";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";


const NotFound = () => (
  <div className={styles.notfound}>
    <Asset
      message="Oopsie! The page you are looking for does not exist"
    />
  </div>
);

export default NotFound;