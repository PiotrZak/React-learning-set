import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { withFirebase } from './components/Firebase';

import {AuthUserContext} from './components/Session';

import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import HomePage from './Home';
import PasswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
 import Navigation from './Navigation';
 /*
import LandingPage from './Landing';



import HomePage from './Home';
import AccountPage from './Account';
 */

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

class App extends Component{


    render(){
      return(
  <Router>
    <div>

      <Navigation />
      <hr />
      <Route exact  path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      {/*
      <Route exact path={ROUTES.LANDING} component={LandingPage} />



     
*/}

    </div>
  </Router>
      );
}
}

  export default withAuthentication(App);