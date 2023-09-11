import { useEffect } from "react";
import { setLanguage } from "../redux/slices/globalSlice/globalSlice";
import { dispatchRedux } from "../redux/store";

const LanguageLayout = ({ children, languageToSet }) => {
  useEffect(() => {
    dispatchRedux(setLanguage(languageToSet));
  }, []);

  return <>{children}</>;
};

export default LanguageLayout;
