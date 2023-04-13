import { useEffect, useMemo, useState } from 'react';
import { WindowSizeInterface } from './Hooks.interface';

const useWindowResize = (): WindowSizeInterface => {
  const [data, setData] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  const handleSize = () => {
    setData({
      width: window.outerWidth,
      height: window.outerHeight,
    });
  };

  return data;
};

export default useWindowResize;
