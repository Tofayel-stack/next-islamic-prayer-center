import React from 'react';
import styles from '../../styles/landing.module.css'

const Banner = () => {
    return (
        <div className={`bg-[url("https://hips.hearstapps.com/hmg-prod/images/the-nasir-al-mulk-mosque-royalty-free-image-1580500453.jpg")] z-0 h-screen ${styles.imageOverlay}`}>



       <div className='relative z-20 '>
            <div className='text-white flex flex-col justify-items-center h-screen flex-wrap content-center justify-center'>
                <div className='block mx-auto text-center'><img className='w-64' src="https://freesvg.org/img/1617113830muhammad%20rsul%20allah%20free.png" alt="arabic logo" /></div>
                <h1 className='text-7xl text-center font-bold'> &quot; Keep your tongue wet with the <br /> remembrance of Allah. &quot; </h1>
                <h2 className='text-center my-12 font-semibold'>( AL-TIRMIDHI )</h2>

                <div className='text-center font-semibold'>
                    <button className='bg-lime-600 p-3 rounded mx-3'>Learn More</button>
                    <button className='bg-amber-600 p-3 rounded mx-3'>Join Classes</button>
                </div>

                {/* add audio  */}
               <div className='flex justify-center mt-16'>
               <audio src="https://server16.mp3quran.net/kamel/Rewayat-Hafs-A-n-Assem/001.mp3" controls />
               </div>

            </div>
       </div>
            
        </div>
    );
};

export default Banner;