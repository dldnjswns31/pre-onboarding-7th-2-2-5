import { createContext, useContext, useState } from 'react';
import adList from '../assets/database/adListDataSet.json';

const adDataContext = createContext(null);
const adEditContext = createContext(null);
export const useAdData = () => useContext(adDataContext);
export const useAdEdit = () => useContext(adEditContext);

const AdDataContextProvider = ({ children }) => {
  const [adData, setAdData] = useState(adList.ads);

  return (
    <adDataContext.Provider value={adData}>
      <adEditContext.Provider value={setAdData}>{children}</adEditContext.Provider>
    </adDataContext.Provider>
  );
};

export default AdDataContextProvider;
