import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectElement: React.FC = () => {
  const url = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    let urlArr = url.split("/");
    const param2 = urlArr.at(-1);
    urlArr[0] = param2;
    navigate(`/${urlArr.reverse().splice(1).reverse().join("/")}`);
  }, []);

  return <></>;
};

export default RedirectElement;
