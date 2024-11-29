import {useState,useEffect} from "react";
import Image from "next/image";
import styles from "../styles/body.module.css";

const Body: React.FC = () => {


  const texts = ["CABLES & WIRES", "CIRCUIT BREAKERS", "DISTRIBUTION BOARDS"];
  const typingSpeed = 150; // Speed of typing in milliseconds
  const deletingSpeed = 100; // Speed of deleting in milliseconds
  const delayBetweenTexts = 2000; // Delay between switching texts in milliseconds

  const [currentText, setCurrentText] = useState(""); // The text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // The current text index
  const [charIndex, setCharIndex] = useState(0); // The current character index
  const [isDeleting, setIsDeleting] = useState(false); 


  useEffect(() => {
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
        POWERING YOUR NEEDS WITH THE BEST 
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
          <Image width={100} height={100} src="/3PMCCB.png" alt="Solar Panel" />
          <Image width={100} height={100}  src="/ACCL.png" alt="Light Bulb" />
          <Image width={100} height={100}  src="/4PRCCB.png" alt="Wires" />
          <Image width={100} height={100}  src="/2PMCCB.png" alt="Wires" />
          <Image width={100} height={100}  src="/1PMCCB.png" alt="Wires" />

        </div>
      </div>
    </div>
  );
};

export default Body;