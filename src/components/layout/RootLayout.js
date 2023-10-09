import React from 'react';
import Navbar from '../shared/Navbar';
import Header from '../shared/Header';

const RootLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        
        <main>{children}</main>

        <h1 className='text-center'>this is footer ......</h1>
        </>
    );
};

export default RootLayout;