import { useState } from 'react';

const useToggle = () => {
  const [isShow, setIsShow] = useState(false);

  const showHandler = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };

  return [isShow, showHandler];
};

export default useToggle;
