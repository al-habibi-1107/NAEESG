import Image from 'next/image';

import styles from '../styles/wiresabout.module.css';

const WiresAbout = ()=>{

    return(
        <>
        <section className={styles.wiresAbout}>
            <div className={styles.leftContent}>
                <h1 className={styles.leftHeader}>
                    WIRES & CABLES
                </h1>
                <p className={styles.leftText}>
                Discover why Bonton cables are the best-selling and safest choice for electrical wiring. 
                Our certified cables are trusted for their unmatched quality, durability, and adherence to strict safety standards. 
                Perfect for residential, commercial, and industrial applications, Bonton cables ensure efficient performance and long-lasting reliability. 
                As a leading distributor, we provide the finest cables designed for maximum safety and power efficiency, meeting the highest industry standards. Our commitment to quality and customer satisfaction has made us a top choice for professionals and homeowners alike. 
                Choose Bonton cables for superior safety, performance, and value. Contact us today for unbeatable deals!

                </p>
                <button className={styles.leftBtn}>
                    KNOW MORE
                </button>
            </div>
            <div className={styles.rightContent}>
                <Image className={styles.rightImg} src='/BONTON.png' alt='Bonton' width={350} height={350} loading='lazy'/>
                
            </div>
        </section>
        </>
    );
}

export default WiresAbout;