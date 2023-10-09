import React from 'react';
import Navbar from '../shared/Navbar';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const RootLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        
        <main>{children}</main>

        <Footer></Footer>
        </>
    );
};

export default RootLayout;