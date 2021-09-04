import React from 'react';
import ThemePage from './assets/themes/theme-wrapper-page';
// import LandingPage from './pages/landing-page';
import Login from './pages/login/login';
// import PersonalDataRegister from './pages/register/register';




function App() {

  return (
    <ThemePage>
     {/* <LandingPage></LandingPage> */}
     <Login></Login>
     {/* <PersonalDataRegister></PersonalDataRegister> */}
     </ThemePage>

  );
}

export default App;
