import { useState } from "react";

import styles from "../styles/footer.module.css"

const Footer = ()=>{

    const [openSections, setOpenSections] = useState({
        tools: false,
        company: false,
        support: false,
        partner: false,
      });
    
      const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({
          ...prev,
          [section]: !prev[section],
        }));
      };
  return (
    <div className="footer-container">
      {/* Map Section */}
      <div className={styles['map-section']}>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.86200815317!2d86.1996439753085!3d22.84459427929891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e37f16d0898f%3A0x37f16d0aeee417e7!2sAyesha%20Merlin%20Apartment!5e0!3m2!1sen!2sin!4v1732559156891!5m2!1sen!2sin" 
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className={styles["collapsible-footer"]}>
      {/* Collapsible Sections */}
      <div className={styles["footer-top"]}>
        <div className={styles["footer-section"]}>
          <h4 onClick={() => toggleSection("tools")}>
            Tools & Resources
            <span className={`${styles.arrow} ${openSections.tools ? "open" : ""}`}>▼</span>
          </h4>
          {openSections.tools && (
            <ul>
              <li><a href="/">Documentation</a></li>
              <li><a href="/">Support Center</a></li>
              <li><a href="/">Training</a></li>
            </ul>
          )}
        </div>
        <div className={styles["footer-section"]}>
          <h4 onClick={() => toggleSection("company")}>
            Company
            <span className={`${styles.arrow} ${openSections.company ? "open" : ""}`}>▼</span>
          </h4>
          {openSections.company && (
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Press</a></li>
            </ul>
          )}
        </div>
        <div className={styles["footer-section"]}>
          <h4 onClick={() => toggleSection("support")}>
            Support
            <span className={`${styles.arrow} ${openSections.support ? "open" : ""}`}>▼</span>
          </h4>
          {openSections.support && (
            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          )}
        </div>
        <div className={styles["footer-section"]}>
          <h4 onClick={() => toggleSection("partner")}>
            Partner Portals
            <span className={`${styles.arrow} ${openSections.partner ? "open" : ""}`}>▼</span>
          </h4>
          {openSections.partner && (
            <ul>
              <li><a href="/">Affiliate Program</a></li>
              <li><a href="/">Partnerships</a></li>
              <li><a href="/">Distributors</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles["footer-bottom"]}>
        <div className={styles["social-icons"]}>
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-linkedin"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-youtube"></i></a>
        </div>
        <p>© 2024 NAE Electro Switchgear Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
);
}

export default Footer