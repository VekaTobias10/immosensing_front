import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Login from './pages/login/login';
import PersonalDataRegister from './pages/register/register';
import ValidateEmail from './pages/validate-email/index';
import UserSecondRegister from './pages/userSecondRegister/index';
import PrivateRoute from './components/privateRoute/index';
import Dashboard from './pages/dashboard/dashboard';




function App() {
 


  return (
    <React.Fragment>
      <Router>
       
          <Switch>
          <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
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
      </Router>
    </React.Fragment>
  );
}

export default App;
