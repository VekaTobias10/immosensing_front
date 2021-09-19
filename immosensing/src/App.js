import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import LandingPage from './pages/landing-page';
import Login from './pages/login/login';
import PersonalDataRegister from './pages/register/register';
import ValidateEmail from './pages/validate-email/index';
import UserSecondRegister from './pages/userSecondRegister/index';
import PrivateRoute from './components/privateRoute/index';
import Dashboard from './pages/dashboard/dashboard';
import HomeUser from './pages/homeUser/index';
import LogOutPage from './pages/log-out-page/index';
import CardsDetailsBarrios from './components/card-details-neig/index';

function App() {



  return (
    <React.Fragment>
      <ScopedCssBaseline>
        <Router>

          <Switch>
            <PrivateRoute path='/mapBcn'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/homeUser'>
              <HomeUser />
            </PrivateRoute>
            <PrivateRoute path='/secondRegister'>
              <UserSecondRegister />
            </PrivateRoute>
            <Route path="/preferences/barrios/:name" children={<CardsDetailsBarrios></CardsDetailsBarrios>} />
            <Route path="/logOut">
              <LogOutPage></LogOutPage>
            </Route>
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
      </ScopedCssBaseline>
    </React.Fragment>
  );
}

export default App;
