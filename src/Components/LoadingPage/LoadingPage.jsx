import styles from "../../_Playground/SCSS/loading.module.scss";
import React from "react";

const LoadingPage = () => {
  return (
    <div className={styles.pageLoading}>
      <div className={styles.pencil}>
        <div className={styles.pencil__ballpoint} />
        <div className={styles.pencil__cap} />
        <div className={styles.pencil__capbase} />
        <div className={styles.pencil__middle} />
        <div className={styles.pencil__eraser} />
      </div>
      <div className={styles.line} />
      <h2>Page Loading...Please Wait</h2>
    </div>
  );
};

export default LoadingPage;
