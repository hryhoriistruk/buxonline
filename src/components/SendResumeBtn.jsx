import { useParams } from "react-router-dom";

const SendResumeBtn = ({ children }) => {
  const { language } = useParams();
  console.log(language);
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
