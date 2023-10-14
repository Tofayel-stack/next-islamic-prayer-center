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
                   <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                                </p>
                            </div>
                            </div>
                        </div>
                        </a>

                   {/* single card  */}
                   <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                                </p>
                            </div>
                            </div>
                        </div>
                        </a>

                   {/* single card  */}
                   <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                                </p>
                            </div>
                            </div>
                        </div>
                        </a>


                </div> 
            </div>


        </div>
    );
};

export default About;


About.getLayout = function getLayout(page) {

    return <RootLayout>{page}</RootLayout>
}


