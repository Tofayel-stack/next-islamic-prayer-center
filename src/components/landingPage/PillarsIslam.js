import React from 'react';
import styles from '../../styles/landing.module.css'

const PillarsIslam = () => {
    return (
        <div className={`bg-[url("https://png.pngtree.com/background/20220714/original/pngtree-islamic-background-ramadan-kareem-with-gold-mandala-in-wedding-invitation-card-picture-image_1604474.jpg")] z-0 text-white bg-no-repeat bg-cover px-4 py-20 ${styles.imageOverlay}`} > 

        <div className="container mx-auto md:px-24 lg:px-8 relative z-30">
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
           <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold  md:mx-auto">
            The Pillars of Islam
           </h2>
           <p className='text-xl'>Ethical & Moral Beliefs That Guides To The Straight Path! </p>
           
        
       </div>
       <div className="grid grid-cols-2 gap-2 row-gap-2 mb-10 sm:grid-cols-3 lg:grid-cols-5">
     
            <div className={styles.hexagon}>
                <h1 className='mt-20 text-2xl text-center font-semibold'>Shahadah</h1>
            </div>
           
            <div className={styles.hexagon}>
                <h1 className='mt-20 text-2xl text-center font-semibold'>Salah</h1>
            </div>
           
            <div className={styles.hexagon}>
                <h1 className='mt-20 text-2xl text-center font-semibold'>Sawm</h1>
            </div>
           
            <div className={styles.hexagon}>
                <h1 className='mt-20 text-2xl text-center font-semibold'>Zakat</h1>
            </div>
           
            <div className={styles.hexagon}>
                <h1 className='mt-20 text-2xl text-center font-semibold'>Hajj</h1>
            </div>
           

       </div>
       
       </div>
   </div>
    );
};

export default PillarsIslam;