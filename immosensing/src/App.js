import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemePage from './assets/themes/theme-wrapper-page';
import LandingPage from './pages/landing-page';
import Login from './pages/login/login';
import PersonalDataRegister from './pages/register/register';
import ValidateEmail from './pages/validate-email/index';




function App() {

  return (
    <React.Fragment>
      <Router>
        <ThemePage>
          <Switch>
            <Route path="/register">
              <PersonalDataRegister></PersonalDataRegister>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/validate-mail">
              <ValidateEmail></ValidateEmail>
            </Route>
            <Route path="*">
              <LandingPage></LandingPage>
            </Route>
          </Switch>
        </ThemePage>
      </Router>
    </React.Fragment>
  );
}

export default App;
