import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Amplify } from "aws-amplify";
import {
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { AmplifyProvider, Authenticator, Image, useTheme, View, withAuthenticator, Flex } from "@aws-amplify/ui-react";
import { studioTheme, AlertSuccess, AlertWarning, AlertError } from './ui-components';
import { NavBar, SideBar, ViewProfile, Document, Upload, Footer, Home } from './components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import { Hub } from 'aws-amplify';
import AuthContextProvider from "./contexts/AuthContext";

// import { RouteNavigation } from './routers';
import "@aws-amplify/ui-react/styles.css";
import './App.css';

import { addUser, updateLoginTimeForUser } from './api/user'

Hub.listen('auth', (data) => {
  switch (data.payload.event) {
    case 'signIn':
        console.log('user signed in');
        // console.log(data);
        updateLoginTimeForUser(data.payload.data.attributes.sub);
        break;
    case 'signUp':
        console.log('user signed up');
        // console.log(data);
        addUser(data.payload.data.userSub, data.payload.data.user.username);
        break;
    case 'signOut':
        console.log('user signed out');
        useNavigateAction({
          type: "url",
          url: "/",
        });
        break;
    case 'signIn_failure':
        console.log('user sign in failed');
        break;
    case 'configured':
        console.log('the Auth module is configured');
  }
});

Amplify.configure({
  ...awsconfig,
});

function App({signOut, user}) {
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
    <AmplifyProvider theme={studioTheme}>
      <Authenticator variation="modal" components={components}>
        <AuthContextProvider>
          <NavBar />

          { alert 
          ?
            <Flex
                  id="div_alert"
                  direction="column"
                  position="absolute"
                  alignItems="stretch"
                  style={{zIndex: '9999'}}
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
                  <Route element={<Document/>} path="/" />
                  <Route element={<Document/>} path="/home" />
                  <Route element={<Document/>} path="/document" />
                  <Route element={<Upload setAlert={setAlert} setAlertContent={setAlertContent} />} path="/upload" />
              </Routes>
            </Router>
          </Flex>

          <Footer />
        </AuthContextProvider>
        
        {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My App
          </p>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          
          

          
        </header>
      </div> */}


      </Authenticator>
    </AmplifyProvider>

  );
}

export default withAuthenticator(App);
