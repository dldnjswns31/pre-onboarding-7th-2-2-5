import { useState } from 'react';

const useShow = () => {
  const [isShow, setIsShow] = useState(false);

  const showHandler = () => {
    setIsShow((prev) => !prev);
  };
  return [isShow, showHandler];
};

export default useShow;
