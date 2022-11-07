import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdDataContextProvider from './context/adDataContext';
import { ChartOptionProvider } from './context/chartOptionContext';
import { EndedDateProvider, StartDateProvider } from './context/dateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StartDateProvider>
    <EndedDateProvider>
      <ChartOptionProvider>
        <AdDataContextProvider>
          <App />
        </AdDataContextProvider>
      </ChartOptionProvider>
    </EndedDateProvider>
  </StartDateProvider>
);
