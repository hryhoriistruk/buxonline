import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as WalletIcon } from "../assets/svg/singleVacancyPage/wallet.svg";
import { ReactComponent as StarIcon } from "../assets/svg/singleVacancyPage/star.svg";
import { ReactComponent as DocumentIcon } from "../assets/svg/singleVacancyPage/document.svg";

import axios from "axios";
import { Audio } from "react-loader-spinner";
import clsx from "clsx";
import style from "../styles/pages/SingleVacancy.module.scss";

function SingleVacancy() {
  const { id, language } = useParams();

  const [vacancy, setVacancy] = useState(null);
  const [vacancyContent, setVacancyContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-dev.buxonline.org/api/v1/vacancy/${id}?to_lang=${language}`
        );
        setVacancy(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при запросе:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, language]);

  useEffect(() => {
    if (vacancy) {
      const htmlString = vacancy.text;
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlString, "text/html");

      const childNodes = Array.from(htmlDoc.body.childNodes);

      const childElements = childNodes.filter(
        (node) => node.nodeType === Node.ELEMENT_NODE
      );
      setVacancyContent(childElements);
    }
  }, [vacancy]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Audio color={"#2E85EC"} />
      </div>
    );
  }
  if (!vacancyContent) return <></>;

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
                __html: vacancyContent[0].outerHTML,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: vacancyContent[1].outerHTML,
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
                __html: vacancyContent[4].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent[5].outerHTML,
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
                __html: vacancyContent[2].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent[3].outerHTML,
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
                __html: vacancyContent[6].outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent[7].outerHTML,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: vacancyContent[8].outerHTML,
            }}
          />
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
