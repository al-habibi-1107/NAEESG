import { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    tools: false,
    company: false,
    support: false,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  // Detect if the screen is in desktop mode
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Default all sections to open in desktop mode
  useEffect(() => {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.86200815317!2d86.1996439753085!3d22.84459427929891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e37f16d0898f%3A0x37f16d0aeee417e7!2sAyesha%20Merlin%20Apartment!5e0!3m2!1sen!2sin!4v1732559156891!5m2!1sen!2sin"
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
            Tools & Resources
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
                <Link href="/">Documentation</Link>
              </li>
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Training</Link>
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
            Company
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
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
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
            Support
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
                <Link href="/">Help Center</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
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