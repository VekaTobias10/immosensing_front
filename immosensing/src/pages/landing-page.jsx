import React from 'react';
import HeaderLanding from '../components/components-landingpage/header-landing';
import ServicesLanding from '../components/components-landingpage/services';
import ForWhoLanding from '../components/components-landingpage/presentation';
import SupportLanding from '../components/components-landingpage/supportSection';
import FooterLanding from '../components/components-landingpage/footer';



function LandingPage (){
    return (
        <React.Fragment>
        <HeaderLanding></HeaderLanding>
        <ServicesLanding></ServicesLanding>
        <ForWhoLanding></ForWhoLanding>
        <SupportLanding></SupportLanding>
        <FooterLanding></FooterLanding>
        </React.Fragment>
    );
}

export default LandingPage;

