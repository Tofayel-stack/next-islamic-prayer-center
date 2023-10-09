import React from 'react';
import styles from '../../styles/landing.module.css'

const Footer = () => {
    return (
        <div className={`bg-[url("https://cdn.pixabay.com/photo/2018/09/28/19/07/islamic-3710002_640.jpg")] z-0  bg-no-repeat bg-cover bg-center pt-32 ${styles.imageOverlay} relative ` }>
            
        <div className={`${styles.islamicDesign} pb-24`}>
                
          <div className={`container m-auto relative z-20 text-white text-center `}>
            <div className='flex justify-center items-center my-8'>
                <img className='w-36' src="https://i.ibb.co/W3b4PJc/24-242664-islamic-logo-free-png-transparent-png-removebg-preview.png" alt="logo" />
                <div>
                    <p className='text-3xl font-bold'>TURAG</p>
                    <span>Islamic Center</span>
                </div>
            </div>
            <p className='text-sm text-zinc-400'>Islam is the most dolore magna aliqua popular lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                <div className="flex flex-row justify-center items-center my-8">
                    
                <p className="text-xl mx-4
                 antialiased text-center dark:text-gray-100">Subscribe For Latest Updates</p>
                    <input type="text" placeholder="example@email.com" className="w-96 p-3 rounded-l-lg bg-zinc-900 outline-none" />
                    <button className="w-44 p-3 font-semibold rounded-r-lg bg-lime-600 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                </div>
          </div>
         
        </div>
            <hr />
          <h1 className='text-white text-center  py-4'> The Islamic Center © 2023 - All rights reserved.</h1>
        </div>
    );
};

export default Footer;