import { useSelector } from "react-redux";

const SendResumeBtn = ({ children }) => {
  const { language } = useSelector((state) => state.global);
  return (
    <>
      <a
        href={`https://job.buxonline.org/${language}`}
        className="button"
        target="blank"
      >
        {children}
      </a>
    </>
  );
};

export default SendResumeBtn;
