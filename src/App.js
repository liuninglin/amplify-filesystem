import React, { useState, useEffect, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Amplify, AuthModeStrategyType, Auth, DataStore } from "aws-amplify";
import {
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { AmplifyProvider, Authenticator, Image, useTheme, View, withAuthenticator, Flex, Button } from "@aws-amplify/ui-react";
import { studioTheme, AlertSuccess, AlertWarning, AlertError } from './ui-components';
import { NavBar, SideBar, ViewProfile, Document, Upload, Footer, Home, Versions } from './components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import { Hub } from 'aws-amplify';
import AuthContextProvider from "./contexts/AuthContext";
import { User } from "./models";

import "@aws-amplify/ui-react/styles.css";
import './App.css';

// import { addUser, updateLoginTimeForUser } from './api/user'

Amplify.configure({
  ...awsconfig,
  Auth: {
    // region: "us-east-1",
    // userPoolId: "us-east-1_Jo1a9cF0M",
    // userPoolWebClientId: "4sr58o0snrb58jbabu9ovbbfd4",
    // identityPoolId: "us-east-1:a2fe2de2-3d6f-46fc-b862-2dfb3d8fb7e8",
    // identityPoolRegion: "us-east-1"

    region: "us-east-1",
    userPoolId: "us-east-1_Jo1a9cF0M",
    userPoolWebClientId: "6t3tk9ntg5lrubpjs19tlnvusg",
    identityPoolId: "us-east-1:4b51ae18-cdb9-44e3-938c-394249ec0ff4",
    identityPoolRegion: "us-east-1" 
  }
});

const oauth = {
  domain: "mio-internal-dev.auth.us-east-1.amazoncognito.com",
  scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile", "phone"],
  // redirectSignIn: "https://master.d3s3aixswovl68.amplifyapp.com/",
  // redirectSignOut: "https://master.d3s3aixswovl68.amplifyapp.com/",
  redirectSignIn: "http://localhost:3000/",
  redirectSignOut: "http://localhost:3000/",
  responseType: "code"
};
Auth.configure({oauth});







const App = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const handleSearch = (txt) => {
    if (txt !== searchTxt) setSearchTxt(txt);
    console.log('new search: ', txt);
  };

  const [alert, setAlert] = useState(true);
  const [alertContent, setAlertContent] = useState('');

  const [authState, setAuthState] = useState('signIn');
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      console.log(user);
      setAuthState('signedIn');
      setAuthUser(user);
    }).catch(e => {
      console.log(e);
      setAuthState('signIn');
      setAuthUser(null);
    });
  }, []);


  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        console.log('user signed in');
        setAuthState('signedIn');
        break;
      case 'signOut':
        console.log('user signed out');
        setAuthState('signIn');
        setAuthUser(null);
        break;
      case 'signIn_failure':
        console.log('user sign in failed');
        setAuthState('signIn');
        setAuthUser(null);
        break;
    }
  });

  const signOut = () => {
    Auth.signOut().then(() => {
      setAuthState('signIn');
      setAuthUser(null);
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <div className="App">
      {
        authState === 'loading' && 
        (<div>loading...</div>)
      }
      {
        authState === 'signIn' &&         
        (
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            padding="24px 24px 24px 24px"
          >
            <Button title="Federated Sign In" onClick={() => Auth.federatedSignIn()} >Sign In with MIO Account</Button>
          </Flex>
        )
      }
      {
        authState === 'signedIn' &&
        (
        <>
          <NavBar authUser={authUser} signOut={signOut}/>

          {
            alert
              ?
              <Flex
                id="div_alert"
                direction="column"
                position="absolute"
                alignItems="stretch"
                style={{ zIndex: '9999' }}
              >
                {alertContent}
              </Flex>
              : ''
          }
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            padding="24px 24px 24px 24px"
          >

            <Router>
              <Routes>
                {/* <Route element={<Home setAlert={setAlert} setAlertContent={setAlertContent} />} path="/" /> */}
                <Route element={<Document />} path="/" />
                <Route element={<Document />} path="/home" />
                <Route element={<Document />} path="/document" />
                <Route element={<Versions />} path="/versions/:filename" />
                <Route element={<Upload setAlert={setAlert} setAlertContent={setAlertContent} />} path="/upload" />
              </Routes>
            </Router>
          </Flex>

          <Footer />
        </>
        )
      }
    </div>
  );
}

export default App;