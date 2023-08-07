import { useEffect } from "react";
import { useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return width;
};

export default useWindowWidth;
