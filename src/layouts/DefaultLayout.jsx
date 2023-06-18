import React from 'react';
import Header from '../components/Header';
import Bennar from '../components/Bennar';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header />
            <Bennar />
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;