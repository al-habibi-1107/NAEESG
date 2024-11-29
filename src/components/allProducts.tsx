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
        <div className={styles.productsGrid}>
            <div className={styles.productCard}>
            <img src="/3PMCCB.png" alt="MCBs" />
            <div className={styles.label}>MCB</div>
            </div>
            <div className={styles.productCard}>
            <img src="/4PRCCB.png" alt="RCCBs" />
            <div className={styles.label}>RCCB</div>
            </div>
            <div className={styles.productCard}>
            <img src="/ACCL.png" alt="ACCLs" />
            <div className={styles.label}>ACCL</div>
            </div>
            <div className={styles.productCard}>
            <img src="/SDC.png" alt="Switch Disconnectors" />
            <div className={styles.label}>Switch Disconnectors</div>
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