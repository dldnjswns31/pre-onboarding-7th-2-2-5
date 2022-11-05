import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const StartDateContext = createContext(null);
const EndedDateContext = createContext(null);

export const useStartDate = () => useContext(StartDateContext);
export const useEndedDate = () => useContext(EndedDateContext);

export const StartDateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date(new Date('2022-04-20').getTime() - 604800000));

  const changeStartDate = (date) => {
    setStartDate(new Date(date));
  };

  return <StartDateContext.Provider value={{ startDate, changeStartDate }}>{children}</StartDateContext.Provider>;
};

export const EndedDateProvider = ({ children }) => {
  const [endedDate, setEndedDate] = useState(new Date('2022-04-20'));

  const changeEndedDate = (date) => {
    setEndedDate(new Date(date));
  };

  return <EndedDateContext.Provider value={{ endedDate, changeEndedDate }}>{children}</EndedDateContext.Provider>;
};
