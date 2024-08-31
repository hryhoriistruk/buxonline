import { useState, useEffect } from 'react';

const useWindowWidth = (): number | null => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return width;
};

export default useWindowWidth;