import {useState,useEffect} from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../styles/body.module.css";

const texts = ["CABLES & WIRES", "CIRCUIT BREAKERS", "DISTRIBUTION BOARDS"];

const BodySection: React.FC = () => {

  const router = useRouter();

  // Handler for the View All button
  const handleCTA = () => {
    router.push("/products");
  };

  const typingSpeed = 150; // Speed of typing in milliseconds
  const deletingSpeed = 100; // Speed of deleting in milliseconds
  const delayBetweenTexts = 2000; // Delay between switching texts in milliseconds

  const [currentText, setCurrentText] = useState(""); // The text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // The current text index
  const [charIndex, setCharIndex] = useState(0); // The current character index
  const [isDeleting, setIsDeleting] = useState(false); 


  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleTyping = () => {
      const currentWord = texts[currentIndex];

      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentWord.length) {
          setCurrentText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Finished typing, start deleting after a delay
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Finished deleting, move to the next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Loop back to start
        }
      }
    };

    // Set typing/deleting speed
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Clear timeout on unmount or update
  }, [charIndex, isDeleting, currentIndex]);


  return (
    <div className={styles.bodyContainer}>
      {/* Left Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
        NAE ELECTRO SWITCHGEAR POWERS YOU WITH THE BEST 
        <div className={styles["blinking-text-box"]}>
       <span>{currentText}</span>
      <span
       className={styles["blinking-text"]}
      >
        |
      </span>
    </div>
        </h1>
        <p className={styles.description}>
        Super Distributor for <b>SIEMENS & BONTON Cables in Jharkhand</b><br/>
        Trusted Partner for Electrical Appliances, Serving
          <b> 50+</b> Vendors and <b>10+</b> Commercial Projects
        </p>
        <div className={styles.buttons}>
          <button onClick={()=>handleCTA()} className={`${styles.btn} ${styles.btnElectrical}`}>
            Wires & Cables
          </button>
          <button onClick={()=>handleCTA()} className={`${styles.btn} ${styles.btnSolar}`}>
            Electrical Appliances
          </button>
          
        </div>
      </div>

      {/* Right Vertical Slider */}
      <div className={styles.slider}>
        <div className={styles.sliderImages}>
         
          <Image width={300} height={300}  src="/Products/Slider/SD_SLIDER.png" alt="Isolator" loading="lazy"/>
          <Image width={300} height={300} src="/Products/Slider/DB_SLIDER.png" alt="DB" loading="lazy"/>
          <Image width={300} height={300}  src="/Products/Slider/MCB_SLIDER.png" alt="MCB" loading="lazy"/>
          <Image width={300} height={300}  src="/Products/Slider/RCCB_SLIDER.png" alt="RCCB" loading="lazy"/>

        </div>
      </div>
    </div>
  );
};

export default BodySection;