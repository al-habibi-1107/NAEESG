import Image from 'next/image';

import styles from '../styles/allproducts.module.css'



const AllProducts = ()=>{

    return(
        <>
        <section className={styles.productsSection}>
      <div className={styles.headingContainer}>
        <h2>
          All Products <span>Categories</span>
        </h2>
      </div>
      <div className={styles.productsItems}>
        <div className={styles.productsLeft}>
          <div className={styles.productsGrid}>
              <div className={styles.productCard}>
              <Image src="/3PMCCB.png" alt="MCBs" width={150} height={150} />
              <div className={styles.label}>MCB</div>
              </div>
              <div className={styles.productCard}>
              <Image src="/4PRCCB.png" alt="RCCBs" width={150} height={150} />
              <div className={styles.label}>RCCB</div>
              </div>
              <div className={styles.productCard}>
              <Image src="/ACCL.png" alt="ACCLs" width={150} height={150} />
              <div className={styles.label}>ACCL</div>
              </div>
              <div className={styles.productCard}>
              <Image src="/SDC.png" alt="Switch Disconnectors"width={150} height={150}  />
              <div className={styles.label}>Switch Disconnectors</div>
              </div>
          </div>
        <button className={styles['all-products-button']}>VIEW ALL PRODUCTS</button>
        </div>
        <div className={styles.verticalText}>PRODUCTS</div>

     </div>
    </section>

        </>
    );
}

export default AllProducts;