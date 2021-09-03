import React from 'react';
import HeaderLanding from '../components/components-landingpage/header-landing';
import ServicesLanding from '../components/components-landingpage/services';
import ForWhoLanding from '../components/components-landingpage/users';


function LandingPage (){
    return (
        <React.Fragment>
        <HeaderLanding></HeaderLanding>
        <ServicesLanding></ServicesLanding>
        <ForWhoLanding></ForWhoLanding>
        </React.Fragment>
    );
}

export default LandingPage;

