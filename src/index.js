import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdDataContextProvider from './context/adDataContext';
import { ChartOptionProvider } from './context/chartOptionContext';
import { EndedDateProvider, StartDateProvider } from './context/dateContext';
import { AdManagementProvider } from './context/adManagementContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StartDateProvider>
    <EndedDateProvider>
      <ChartOptionProvider>
        <AdDataContextProvider>
          <AdManagementProvider>
            <App />
          </AdManagementProvider>
        </AdDataContextProvider>
      </ChartOptionProvider>
    </EndedDateProvider>
  </StartDateProvider>
);
