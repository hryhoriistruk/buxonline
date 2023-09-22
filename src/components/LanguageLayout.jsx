import { useEffect } from "react";
import { setLanguage } from "../redux/slices/globalSlice/globalSlice";
import { dispatchRedux } from "../redux/store";
import { useSelector } from "react-redux";

const LanguageLayout = ({ children, languageToSet }) => {
  const { language } = useSelector((state) => state.global);

  useEffect(() => {
    dispatchRedux(setLanguage(languageToSet));
  }, []);

  if (!language) return <></>;

  return <>{children}</>;
};

export default LanguageLayout;
