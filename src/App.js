import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator, Image, useTheme, View, withAuthenticator } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';
import { NavBar, SideBar, ViewProfile, File, Upload, Footer, Home } from './components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';

// import { RouteNavigation } from './routers';
import "@aws-amplify/ui-react/styles.css";
import './App.css';

Amplify.configure({
  ...awsconfig,
});

function App({signOut, user}) {
  const [searchTxt, setSearchTxt] = useState('');

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
        <NavBar />
        <Router>
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<File/>} path="/file" />
                <Route element={<Upload/>} path="/upload" />
            </Routes>
        </Router>
        <Footer />

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
