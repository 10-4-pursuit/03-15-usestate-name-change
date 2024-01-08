import React from 'react';
import NameChanger from './NameChanger';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>My App</h1>
        <NameChanger />
      </div>
    </>
  );
};

export default App;