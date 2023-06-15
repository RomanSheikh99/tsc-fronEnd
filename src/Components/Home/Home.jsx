import React from 'react';
import Header from '../Header/Header';
import Bennar from '../Bennar/Bennar';
import SiteNav from '../Navbar/SiteNav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='bg-base'>
            <Header />
            <Bennar />
            <SiteNav />
            <Main />
            <Footer></Footer>
        </div>
    );
};

export default Home;