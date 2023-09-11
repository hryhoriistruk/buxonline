import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as WalletIcon } from "../assets/svg/singleVacancyPage/wallet.svg";
import { ReactComponent as StarIcon } from "../assets/svg/singleVacancyPage/star.svg";
import { ReactComponent as DocumentIcon } from "../assets/svg/singleVacancyPage/document.svg";

import { Audio } from "react-loader-spinner";
import style from "../styles/pages/SingleVacancy.module.scss";
import { useQuery } from "react-query";
import { fetchVacancyRequest } from "../services/requests";
import { useSelector } from "react-redux";
import clsx from "clsx";

function SingleVacancy() {
  const { id } = useParams();
  const { language } = useSelector((state) => state.global);
  const [vacancyContent, setVacancyContent] = useState(null);

  const { data: vacancy, isLoading } = useQuery(
    ["fetch-vacancy", { id, language }],
    fetchVacancyRequest
  );

  useEffect(() => {
    if (vacancy) {
      try {
        const htmlString = vacancy.text;
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(htmlString, "text/html");

        const childNodes = Array.from(htmlDoc.body.childNodes);

        const childElements = childNodes.filter(
          (node) => node.nodeType === Node.ELEMENT_NODE
        );

        if (childElements.length === 0) {
          throw "Text content";
        }

        setVacancyContent({ type: "html", content: childElements });
      } catch (e) {
        setVacancyContent({ type: "text", content: vacancy.text });
      }
    }
  }, [vacancy]);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Audio color={"#2E85EC"} />
      </div>
    );
  }

  if (!vacancyContent) return <></>;
  if (vacancyContent.type === "text") {
    const paragraphs = vacancyContent.content.split("\n");
    return (
      <>
        <div className="s-40"></div>
        <h3 className="title-part mx-3">{vacancy.title}</h3>
        <div className="row">
          <div className={`col-lg-11 px-4 m-4 ma ${language}`}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="title-desc c-dark">
                {paragraph}
              </p>
            ))}
            <div className="s-60"></div>
            <div className="w-100 tc">
              <Link to={"https://job.buxonline.org/"} className="button">
                {vacancy.meta.apply_for_job}
              </Link>
            </div>
          </div>
        </div>
        <div className="s-100"></div>
      </>
    );
  }

  return (
    <>
      <div className="s-40"></div>
      <div className={clsx(style["vacancy-grid-table"])}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className={clsx(style["yellow-fat-underline"])}>
            {vacancy.title}
          </h3>
          <div className={clsx(style["vacancy-title-text"])}>
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent.content[0].outerHTML,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent.content[1].outerHTML,
              }}
            />
          </div>
        </div>
        <div className={clsx(style["vacancy-block"])}>
          <div className={clsx(style["yellow-underline"])}>
            <div style={{ position: "relative", marginRight: "60px" }}>
              <DocumentIcon style={{ position: "absolute", top: "-15px" }} />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent.content[4].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent.content[5].outerHTML,
            }}
          />
        </div>
        <div className={clsx(style["vacancy-block"])}>
          <div className={clsx(style["yellow-underline"])}>
            <div style={{ position: "relative", marginRight: "60px" }}>
              <WalletIcon style={{ position: "absolute", top: "-15px" }} />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent.content[2].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent.content[3].outerHTML,
            }}
          />
        </div>
        <div className={clsx(style["vacancy-block"])}>
          <div className={clsx(style["yellow-underline"])}>
            <div style={{ position: "relative", marginRight: "60px" }}>
              <StarIcon style={{ position: "absolute", top: "-15px" }} />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent.content[6].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent.content[7].outerHTML,
            }}
          />
          {vacancyContent.content[8] && (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: vacancyContent.content[8].outerHTML,
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="s-60"></div>
      <div className="w-100 tc">
        <Link to={"https://job.buxonline.org/"} className="button">
          {vacancy.meta.apply_for_job}
        </Link>
      </div>
      {/* </div>
      </div> */}
      <div className="s-100"></div>
    </>
  );
}

export { SingleVacancy };
