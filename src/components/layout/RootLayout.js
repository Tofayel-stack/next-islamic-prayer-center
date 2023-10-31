import React from 'react';
import Navbar from '../shared/Navbar';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

import { SessionProvider } from "next-auth/react"


const RootLayout = ({children}) => {
    return (
        <>
        <SessionProvider >
        {/* <Header></Header> */}
        {/* <Navbar></Navbar> */}
        
        <main>{children}</main>

        <Footer></Footer>
        </SessionProvider>
        </>
    );
};

export default RootLayout;