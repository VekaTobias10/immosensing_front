import React from 'react';
import MenuNavigator from '../components/components-landingpage/nav-bar';
import HeaderLanding from '../components/components-landingpage/header-landing';


function LandingPage (){
    return (
        <React.Fragment>
        <MenuNavigator></MenuNavigator>
        <HeaderLanding></HeaderLanding>
        </React.Fragment>
    );
}

export default LandingPage;

