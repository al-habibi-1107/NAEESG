import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/footer.module.css";
import { CONSTANTS } from "../constants/constants";


const Footer = () => {

  const [openSections, setOpenSections] = useState({
    tools: false,
    company: false,
    support: false,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  // Detect if the screen is in desktop mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Default all sections to open in desktop mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDesktop) {
      setOpenSections({
        tools: true,
        company: true,
        support: true,
      });
    }
  }, [isDesktop]);

  const toggleSection = (section: keyof typeof openSections) => {
    if (!isDesktop) {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return (
    <footer className={styles.footer}>
        <div className={styles.map}>
        <iframe
          title="Company Location"
          src= {CONSTANTS.MAPS_LINK}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Top Section */}
      <div className={styles["footer-top"]}>
        {/* Tools Section */}
        <div className={styles["footer-section"]}>
          <h4
            onClick={() => toggleSection("tools")}
            className={styles["mobile-title"]}
          >
            SITEMAP
            {!isDesktop && (
              <span
                className={`${styles.arrow} ${
                  openSections.tools ? styles.open : ""
                }`}
              >
                ▼
              </span>
            )}
          </h4>
          {(isDesktop || openSections.tools) && (
            <ul className={styles["footer-links"]}>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/">ABOUT US</Link>
              </li>
              <li>
                <Link href="/">PRODUCTS</Link>
              </li>
              <li>
                <Link href="/">BRANDS</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Company Section */}
        <div className={styles["footer-section"]}>
          <h4
            onClick={() => toggleSection("company")}
            className={styles["mobile-title"]}
          >
            COMPANY
            {!isDesktop && (
              <span
                className={`${styles.arrow} ${
                  openSections.company ? styles.open : ""
                }`}
              >
                ▼
              </span>
            )}
          </h4>
          {(isDesktop || openSections.company) && (
            <ul className={styles["footer-links"]}>
              <li>
                <Link href="/">NAE ELECTRO SWITCHGEAR PVT LTD</Link>
              </li>
              <li>
                <Link href="/">ELECTRICAL APPLIANCES</Link>
              </li>
              <li>
                <Link href="/">WIRES AND CABLES</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Support Section */}
        <div className={styles["footer-section"]}>
          <h4
            onClick={() => toggleSection("support")}
            className={styles["mobile-title"]}
          >
            SUPPORT
            {!isDesktop && (
              <span
                className={`${styles.arrow} ${
                  openSections.support ? styles.open : ""
                }`}
              >
                ▼
              </span>
            )}
          </h4>
          {(isDesktop || openSections.support) && (
            <ul className={styles["footer-links"]}>
              <li>
                <Link href="/">HELP CENTER</Link>
              </li>
              <li>
                <Link href="/">CONTACT US</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
              <li>
                <Link href="/">WHATSAPP</Link>
              </li>
              <li>
                <Link href="/">FACEBOOK</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={styles["footer-bottom"]}>
        <div className={styles["social-icons"]}>
          <Link href="/">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="/">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
        <p>© 2024 NAE Electro Switchgear Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;