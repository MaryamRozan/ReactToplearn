import React, { Fragment } from 'react';
import Footer from '../Components/Common/Footer';
import Header from '../Components/Common/Header';
import Course from '../Components/Course/Course';
import MainNav from '../Components/Nav/MainNav';
import TopNav from '../Components/Nav/TopNav';

const Toplearn = (props) => {
    return ( 
     <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>
            <MainNav />
            <main id="home-page">
                <div className="container">
                   <Course/>
                </div>
            </main>
          
            <Footer/>
        </Fragment>
     );
}
 
export default Toplearn;