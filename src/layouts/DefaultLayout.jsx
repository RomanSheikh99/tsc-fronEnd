import React from 'react';
import Header from '../Components/Header';
import Bennar from '../components/Bennar';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import '../assets/app.scss'
const DefaultLayout = ({children}) => {
    return (
        <div id="app">
          <div className='content'>
          <Header />
            <Bennar />
            <MenuBar />
            {children}
            <Footer />
          </div>
        </div>
    );
};

export default DefaultLayout;