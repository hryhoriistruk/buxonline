import { useEffect } from "react";
import { setLanguage } from "../redux/slices/globalSlice/globalSlice";
import { dispatchRedux } from "../redux/store";
import { useSelector } from "react-redux";

interface LanguageLayoutProps {
  children: React.ReactNode;
  languageToSet: string;
}

const LanguageLayout: React.FC<LanguageLayoutProps> = ({ children, languageToSet }) => {
  const { language } = useSelector((state: { global: { language: string } }) => state.global);

  useEffect(() => {
    dispatchRedux(setLanguage(languageToSet));
  }, []);

  if (!language) return <></>;

  return <>{children}</>;
};

export default LanguageLayout;
