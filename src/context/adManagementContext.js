import { useState, useContext, createContext } from 'react';

const AdFilterContext = createContext(null);
const AdSelectContext = createContext(null);

export const useAdFilter = () => useContext(AdFilterContext);
export const useAdSelector = () => useContext(AdSelectContext);

export const AdManagementProvider = ({ children }) => {
  const [filter, setFilter] = useState();
  const [selectMenu, setSelectMenu] = useState('전체 광고');

  const changeFilter = (data) => {
    setFilter(data);
  };

  const changeSelectMenu = (data) => {
    setSelectMenu(data);
  };

  return (
    <AdSelectContext.Provider value={{ selectMenu, changeSelectMenu }}>
      <AdFilterContext.Provider value={{ filter, changeFilter }}>{children}</AdFilterContext.Provider>
    </AdSelectContext.Provider>
  );
};
