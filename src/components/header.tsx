import Link from 'next/link';
import {useState,useEffect} from 'react';

import styles from '../styles/header.module.css';



const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
        <header className={`${styles.header} ${scrolled ? styles['header-scrolled'] : ''}`}>
      {/* Top Contact Bar */}
      <div className={styles['top-bar']}>
        <div className={styles['contact-info']}>
          <span>
            <i className="fas fa-phone"></i> Quick Contact: +91 72762 50850 | +91 93342 02265
          </span>
          <span>
            <i className="fas fa-envelope"></i> enterprisenae@gmail.com
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="NAE ElectroSwitchgear  Pvt. Ltd."
            className={styles['logo-image']}
          />
          <p className={styles["logo-text"]}>NAE Electro Switchgear Pvt. Ltd.</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        {/* Navigation Links */}
        <nav className={`${styles['nav-links']} ${menuOpen ? styles.active : ''}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
               Products
              </Link>
            </li>
            <li>
              <Link href="/brands" onClick={() => setMenuOpen(false)}>
                Brands
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
}

export default Header;