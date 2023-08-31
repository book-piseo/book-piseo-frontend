
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
    children: React.ReactNode
} 

const Basic = ({children}: Props) => {
    return (
        <div className='relative w-full h-screen'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Basic;

