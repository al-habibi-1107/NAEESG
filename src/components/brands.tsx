// components/BrandsSection.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/brands.module.css';

const BrandsSection: React.FC = () => {
  return (
    <section className={styles.brandsSection}>
      <h2 className={styles.sectionTitle}> <p>OUR</p> BRANDS</h2>
      <div className={styles.brandsContainer}>
        <div className={styles.brandItem}>
          <Image
            src="/siemens_logo.png" // Replace with Siemens logo URL
            alt="Siemens"
            width={250}
            height={150}
          />
        </div>
        <div className={styles.brandItem}>
          <Image
            src="/bonton_logo.png" // Replace with Bonton logo URL
            alt="Bonton"
            width={250}
            height={150}
          />
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;