import RootLayout from "@/components/layout/RootLayout";

const About = () => {
    return (
        <div>
            {/* page banner section  */}
            <div className={`bg-[url("https://i.ibb.co/ZmThCF5/services-head-1.png")] h-[469px] }`}>
                <div className='text-white  flex flex-col justify-center items-center  h-96'>
                    <h1 className='text-5xl font-semibold'>About EKRAH</h1>
                    <p className='py-6'>home? about </p>
                </div>
            </div>


               {/* all service show here .. data will come from database */}
               <div className='lg:w-[70rem] m-auto'>
                  {/* title */}
                    <div >
                    <h1 className='text-center my-6 font-sans text-5xl font-bold  md:mx-auto'> Board Of Scholors</h1>
                        <p className='text-amber-700 my-4 text-2xl text-center'>Our scholar whose knowledge is useful for others</p>
                    </div>

                <div className='mt-16 grid grid-cols-1 gap-2 my-10 sm:grid-cols-3 lg:grid-cols-3'>


                   {/* single card  */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-2xl font-semibold">Bin Baj Rahmahullah</h2>
                                <p className="dark:text-gray-100">Hafiz Quarn Scolar</p>
                            </div>
                        </div>
                    </div>
                   {/* single card  */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-2xl font-semibold">Bin Baj Rahmahullah</h2>
                                <p className="dark:text-gray-100">Hafiz Quarn Scolar</p>
                            </div>
                        </div>
                    </div>
                   {/* single card  */}
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-2xl font-semibold">Bin Baj Rahmahullah</h2>
                                <p className="dark:text-gray-100">Hafiz Quarn Scolar</p>
                            </div>
                        </div>
                    </div>
               


                </div> 
            </div>


        </div>
    );
};

export default About;


About.getLayout = function getLayout(page) {

    return <RootLayout>{page}</RootLayout>
}


