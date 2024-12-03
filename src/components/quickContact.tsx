
import React from "react"

import styles from "../styles/quickContact.module.css"


const QuickContactSection:React.FC = ()=>{
    return(<>
        <section className={styles.quickContact}>
        
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h3>QUICK CONTACT</h3>
            <div className={styles.contactCards}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <i className="fas fa-phone-alt"></i> {/* Replace with your icon */}
                </div>
                <div className={styles.cardContent}>
                  <h3>Enquiry Contact Number</h3>
                  <p>+91 72762 50850 | +91 93342 02265</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <i className="fas fa-envelope"></i> {/* Replace with your icon */}
                </div>
                <div className={styles.cardContent}>
                  <h3>Email</h3>
                  <p>enterprisenae@gmail.com</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <i className="fas fa-map-marker-alt"></i> {/* Replace with your icon */}
                </div>
                <div className={styles.cardContent}>
                  <h3>Address</h3>
                  <p>
                    <a
                      href="https://www.google.com/maps/place/48/579A,+Narayananasan+Rd,+Ponnurunni,+Vyttila,+Ernakulam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className={styles.enquiryForm}>
          <h3>MAKE AN ENQUIRY</h3>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              className={styles.textarea}
            />
            <button type="submit" className={styles.submitButton}>
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
    </>)
}

export default QuickContactSection