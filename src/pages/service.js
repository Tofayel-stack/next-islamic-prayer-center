import RootLayout from '@/components/layout/RootLayout';
import React from 'react';
import styles from '@/styles/landing.module.css'

const Service = ({allService}) => {

    console.log(allService);

    return (
        <div>
            {/* page banner section  */}
            <div className={`bg-[url("https://i.ibb.co/ZmThCF5/services-head-1.png")] h-[469px] }`}>
                <div className='text-white  flex flex-col justify-center items-center  h-96'>
                    <h1 className='text-5xl font-semibold'>Our Services</h1>
                    <p className='py-6'>home? service </p>
                </div>
            </div>

            {/* all service show here .. data will come from database */}
            <div className='lg:w-[70rem] m-auto'>
                  {/* title */}
                    <div >
                    <h1 className='text-center my-6 font-sans text-5xl font-bold  md:mx-auto'> Islamic Center Services</h1>
                        <p className='text-amber-700 my-4 text-2xl text-center'>Ethical & Moral Beliefs That Guides To The Straight Path!</p>
                    </div>

                <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3'>

                {/* single card  */}

                {
                    allService?.map((service,i)=>(
                        <div key={i} className="w-[22rem] shadow-md hover:bg-lime-600 hover:text-white transition duration-300 dark:bg-gray-900 dark:text-gray-100">
                        <img src={service?.image_url} alt="pic" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracki">{service?.title}</h2>
                                <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            </div>
                            <button className="font-semibold text-start w-24 underline text-amber-800 ">Read more</button>
                        </div>
                    </div>
                    ))
                }


            
              


                </div> 
            </div>
        </div>
    );
};

export default Service;

Service.getLayout = function getLayout(page) {
    return (
      
        <RootLayout>{page}</RootLayout>
     
    )
  }



  export const  getStaticProps= async ()=>{

        const res = await fetch('http://localhost:3000/api/services');
        const data =await res.json();

        return{
            props :{allService:data},
            revalidate:10,

        }
  }