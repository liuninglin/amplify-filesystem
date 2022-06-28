import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator, Image, useTheme, View } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import './App.css';

Amplify.configure({
  ...awsconfig,
});

function App() {
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

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              My App
            </p>
          </header>
        </div>

      </Authenticator>
    </AmplifyProvider>

  );
}

export default App;
