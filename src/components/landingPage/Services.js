import React from 'react';

const Services = () => {
    return (
        <div className='container m-auto py-24'>
            {/* title */}
            <div >
               <h1 className='text-center my-6 font-sans text-5xl font-bold  md:mx-auto'> Islamic Center Services</h1>
                <p className='text-amber-700 my-4 text-2xl text-center'>Ethical & Moral Beliefs That Guides To The Straight Path!</p>
            </div>
            {/* all services card here  */}

            <div className='mt-16 grid grid-cols-1 gap-2 my-10 sm:grid-cols-3 lg:grid-cols-4'>

                {/* single card  */}
                <div className="max-w-xs shadow-md hover:bg-lime-600 hover:text-white transition duration-300 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">Mosque Development</h2>
                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="font-semibold text-start w-24 underline text-amber-800 ">Read more</button>
                    </div>
                </div>
                {/* single card  */}
                <div className="max-w-xs shadow-md hover:bg-lime-600 hover:text-white transition duration-300 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">Mosque Development</h2>
                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="font-semibold text-start w-24 underline text-amber-800 ">Read more</button>
                    </div>
                </div>
                {/* single card  */}
                <div className="max-w-xs shadow-md hover:bg-lime-600 hover:text-white transition duration-300 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">Mosque Development</h2>
                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="font-semibold text-start w-24 underline text-amber-800 ">Read more</button>
                    </div>
                </div>
                {/* single card  */}
                <div className="max-w-xs shadow-md hover:bg-lime-600 hover:text-white transition duration-300 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="pic" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracki">Mosque Development</h2>
                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="font-semibold text-start w-24 underline text-amber-800 ">Read more</button>
                    </div>
                </div>

               

            </div>
        </div>
    );
};

export default Services;