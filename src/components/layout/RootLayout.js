import React from 'react';
import Navbar from '../shared/Navbar';

const RootLayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        
        <main>{children}</main>

        <h1 className='text-center'>this is footer ......</h1>
        </>
    );
};

export default RootLayout;