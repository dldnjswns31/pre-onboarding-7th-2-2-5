import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EndedDateProvider, StartDateProvider } from './context/dateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StartDateProvider>
    <EndedDateProvider>
      <App />
    </EndedDateProvider>
  </StartDateProvider>
);
