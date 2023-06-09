import React from 'react';
import Header from '../Header/Header';
import Bennar from '../Bennar/Bennar';
import SiteNav from '../Navbar/SiteNav';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div>
            <Header />
            <Bennar />
            <SiteNav />
            <Main />
        </div>
    );
};

export default Home;