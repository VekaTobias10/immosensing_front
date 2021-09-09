import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeWrapper from './assets/themes/theme-wrapper-page';
import LandingPage from './pages/landing-page';
import Login from './pages/login/login';
import PersonalDataRegister from './pages/register/register';
import ValidateEmail from './pages/validate-email/index';
import UserSecondRegister from './pages/userSecondRegister/index';
import PrivateRoute from './components/privateRoute/index';




function App() {

  return (
    <React.Fragment>
      <Router>
        <ThemeWrapper>
          <Switch>
          <PrivateRoute path='/user'>
          <UserSecondRegister />
        </PrivateRoute>
            <Route path="/register">
              <PersonalDataRegister></PersonalDataRegister>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/validate-mail">
              <ValidateEmail></ValidateEmail>
            </Route>
            <Route path="/">
              <LandingPage></LandingPage>
            </Route>
          </Switch>
        </ThemeWrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;
