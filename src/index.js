import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChartOptionProvider } from './context/chartOptionContext';
import { EndedDateProvider, StartDateProvider } from './context/dateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StartDateProvider>
    <EndedDateProvider>
      <ChartOptionProvider>
        <App />
      </ChartOptionProvider>
    </EndedDateProvider>
  </StartDateProvider>
);
