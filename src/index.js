import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component

// Create a root div element if it doesn't exist
const rootElement = document.getElementById('root') || document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// Render the App component to the root element
ReactDOM.render(<App />, rootElement);