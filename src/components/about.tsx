
import Image from 'next/image';

import styles from '../styles/about.module.css';

const About = ()=>{

    return(
        <div className={styles["about-card"]}>
        <div className={styles["about-card-icon"]}>
          <Image
            src="/plug-w.png" // Replace with the icon's path
            alt="About Icon"
            width={100}
            height={100}
            loading='lazy'
          />
        </div>
        <div className={styles["about-card-title"]}>
        <p>ABOUT</p>
        <h2> NAE ELECTRO  SWITCHGEAR  PVT. Ltd.</h2>
        </div>
        <div className={styles["about-card-content"]}>
         
          <p>
          NAE Electro Switchgear Pvt. Ltd. is a trusted distributor of high-quality electrical switchgear solutions, 
          specializing in Siemens and Bonton products. 
          With a strong presence in Jharkhand, we provide a comprehensive range of electrical components, 
          including MCBs, MCCBs, wires, and cables. Our commitment is to deliver reliable and innovative solutions to meet diverse electrical needs.
          </p>
        </div>
      </div>
    );
}

export default About;