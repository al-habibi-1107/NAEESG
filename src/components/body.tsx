import React from "react";
import styles from "../styles/body.module.css";

const Body: React.FC = () => {
  return (
    <div className={styles.bodyContainer}>
      {/* Left Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
        Powering Your Needs with the Best Electrical Products
        </h1>
        <p className={styles.description}>
          Super Distributor for SIEMENS & BONTON Cables in Jharkhand
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.btnElectrical}`}>
            Electrical
          </button>
          <button className={`${styles.btn} ${styles.btnSolar}`}>Solar</button>
        </div>
      </div>

      {/* Right Vertical Slider */}
      <div className={styles.slider}>
        <div className={styles.sliderImages}>
          <img src="/3PMCCB.png" alt="Solar Panel" />
          <img src="/2PMCCB.png" alt="Light Bulb" />
          <img src="/1PMCCB.png" alt="Wires" />
        </div>
      </div>
    </div>
  );
};

export default Body;