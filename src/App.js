import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Amplify, AuthModeStrategyType, Auth } from "aws-amplify";
import {
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { AmplifyProvider, Authenticator, Image, useTheme, View, withAuthenticator, Flex, Button } from "@aws-amplify/ui-react";
import { studioTheme, AlertSuccess, AlertWarning, AlertError } from './ui-components';
import { NavBar, SideBar, ViewProfile, Document, Upload, Footer, Home } from './components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import { Hub } from 'aws-amplify';
import AuthContextProvider from "./contexts/AuthContext";

import "@aws-amplify/ui-react/styles.css";
import './App.css';

import { addUser, updateLoginTimeForUser } from './api/user'

Hub.listen('auth', (data) => {
  switch (data.payload.event) {
    case 'signIn':
      console.log('user signed in');
      console.log(data);
      // console.log(Auth.user.attributes.email);
      console.log(Auth.user);
      // updateLoginTimeForUser(data.payload.data.attributes.sub);
      break;
    case 'signUp':
      console.log('user signed up');
      console.log(data);
      addUser(data.payload.data.userSub, data.payload.data.user.username);
      break;
    case 'signOut':
      console.log('user signed out');
      console.log(data);
      useNavigateAction({
        type: "url",
        url: "/",
      });
      break;
    case 'signIn_failure':
      console.log('user sign in failed');
      console.log(data);
      break;
    case 'configured':
      console.log('the Auth module is configured');
      console.log(data);
  }
});

Amplify.configure({
  ...awsconfig,
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_Jo1a9cF0M",
    userPoolWebClientId: "4sr58o0snrb58jbabu9ovbbfd4",
    oauth: {
      domain: "mio-internal-dev.auth.us-east-1.amazoncognito.com",
      scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile", "phone"],
      redirectSignIn: "http://localhost:3000/oauth2/idpresponse",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code"
    }
  }
});


const App = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const [alert, setAlert] = useState(true);
  const [alertContent, setAlertContent] = useState('');

  const handleSearch = (txt) => {
    if (txt !== searchTxt) setSearchTxt(txt);
    console.log('new search: ', txt);
  };

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Amplidoc logo"
            src="logo192.png"
            height="150px"
          />
        </View>
      )
    }
  };



  return (
    <>
    <NavBar />
    <Button title="Federated Sign In" onClick={() => Auth.federatedSignIn()} >asdfasd</Button>
    
    </>


  );
}

export default App;

