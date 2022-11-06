import { useContext, useState } from 'react';
import { createContext } from 'react';

const FirstOptionContext = createContext(null);
const SecondOptionContext = createContext(null);

export const useFirstOption = () => useContext(FirstOptionContext);
export const useSecondOption = () => useContext(SecondOptionContext);

export const ChartOptionProvider = ({ children }) => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);

  const changeFirstOption = (option) => {
    setFirstOption(option);
  };

  const changeSecondOption = (option) => {
    setSecondOption(option);
  };

  return (
    <FirstOptionContext.Provider value={{ firstOption, changeFirstOption }}>
      <SecondOptionContext.Provider value={{ secondOption, changeSecondOption }}>
        {children}
      </SecondOptionContext.Provider>
    </FirstOptionContext.Provider>
  );
};
