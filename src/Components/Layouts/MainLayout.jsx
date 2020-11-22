import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import  LoadingBar  from 'react-redux-loading-bar';
import { withRouter } from 'react-router';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import MainNav from '../Nav/MainNav';
import TopNav from '../Nav/TopNav';

const MainLayout = (props) => {
    const {pathname}=props.location;
    return (
        <Fragment>
            <Helmet>
                <title>
                    خودآموز تاپلرن
                </title>
            </Helmet>
            <div className="landing-layer">
                <LoadingBar style={{backgroundColor:"lime",height:"5px"}}/>
                <div className="container">
                    <TopNav />
                   {pathname==="/"?  <Header />:null}
                </div>
            </div>
            <MainNav />
            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </Fragment>

    );
}

export default withRouter(MainLayout);