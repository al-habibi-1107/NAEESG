import React from "react";
import styles from "../styles/body.module.css";

const Body: React.FC = () => {
  return (
    <div className={styles.bodyContainer}>
      {/* Left Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
        POWERING YOUR NEEDS WITH THE BEST ELECTRICAL PRODUCTS
        </h1>
        <p className={styles.description}>
          Super Distributor for SIEMENS & BONTON Cables in Jharkhand<br/>
          Authorised Dealer of Circuit Breakers , Switch Disconnectors and Distribution Boards
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.btnElectrical}`}>
            Wires & Cables
          </button>
          <button className={`${styles.btn} ${styles.btnSolar}`}>
            Electrical Appliances
          </button>
          
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