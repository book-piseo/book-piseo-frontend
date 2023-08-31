
import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
    children: React.ReactNode
} 

const Basic = ({children}: Props) => {
    return (
        <div className='relative w-full h-screen'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Basic;

