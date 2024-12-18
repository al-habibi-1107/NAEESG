import { useRouter } from "next/router";
import Image from 'next/image';

import styles from '../styles/allproducts.module.css'



const AllProducts = ()=>{
  const router = useRouter();

  // Handler for the View All button
  const handleViewAll = () => {
    router.push("/products");
  };

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
              <div className={styles.productCard}
              onClick={() => handleViewAll()}
              >
              <Image src="/Products/MCB_ALL.png" alt="MCBs" width={150} height={150} loading="lazy"/>
              <div className={styles.label}>MCB</div>
              </div>
              <div className={styles.productCard}
              onClick={() => handleViewAll()}
              >
              <Image src="/Products/RCCB_ALL.png" alt="RCCBs" width={150} height={150} loading="lazy"/>
              <div className={styles.label}>RCCB</div>
              </div>
              <div className={styles.productCard}
              onClick={() => handleViewAll()}  
              >
              <Image src="/Products/ACCL_ALL.png" alt="ACCLs" width={150} height={150} loading="lazy"/>
              <div className={styles.label}>ACCL</div>
              </div>
              <div className={styles.productCard}
              onClick={() => handleViewAll()}
              >
              <Image src="/Products/SD_ALL.png" alt="Switch Disconnectors"width={150} height={150}  loading="lazy"/>
              <div className={styles.label}>Switch Disconnectors</div>
              </div>
          </div>
        <button  onClick={handleViewAll} className={styles['all-products-button']}>VIEW ALL PRODUCTS</button>
        </div>
        <div className={styles.verticalText}>PRODUCTS</div>

     </div>
    </section>

        </>
    );
}

export default AllProducts;