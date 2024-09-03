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
import Layout from "../components/Layout";
import { metaData } from "../constants/metaData";

interface Vacancy {
id: string;
text: string;
title: string;
meta: {
apply_for_job: string;
};
}

interface VacancyContent {
type: "html" | "text";
content: HTMLElement[] | string;
}

const SingleVacancy: React.FC = () => {
const { id } = useParams<{ id: string }>();
const { language } = useSelector((state: any) => state.global);
const [vacancyContent, setVacancyContent] = useState<VacancyContent | null>(null);

const { data: vacancy, isLoading } = useQuery<Vacancy>(
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
        ) as HTMLElement[];

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
    const paragraphs = (vacancyContent.content as string).split("\n");

    return (
      <Layout
        title={`${metaData["vacancy"].title}${vacancy.title}`}
        description={paragraphs.splice(0, 3).join("") + "..."}
        canonical={`/${language}/${metaData["vacancy"].canonical}/${id}`}
      >
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
      </Layout>
    );
  }

  return (
    <Layout
      title={`${metaData["vacancy"].title}${vacancy.title}`}
      description={(vacancyContent.content[1] as HTMLElement).textContent || ""}
      canonical={`/${language}/${metaData["vacancy"].canonical}/${id}`}
    >
      <div className="s-40"></div>
      <div className={clsx(style["vacancy-grid-table"])}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className={clsx(style["yellow-fat-underline"])}>
            {vacancy.title}
          </h3>
          <div className={clsx(style["vacancy-title-text"])}>
            <div
              dangerouslySetInnerHTML={{
                __html: (vacancyContent.content[0] as HTMLElement).outerHTML,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: (vacancyContent.content[1] as HTMLElement).outerHTML,
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
                __html: (vacancyContent.content[4] as HTMLElement).outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: (vacancyContent.content[5] as HTMLElement).outerHTML,
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
                __html: (vacancyContent.content[2] as HTMLElement).outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: (vacancyContent.content[3] as HTMLElement).outerHTML,
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
                __html: (vacancyContent.content[6] as HTMLElement).outerHTML,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: (vacancyContent.content[7] as HTMLElement).outerHTML,
            }}
          />
          {vacancyContent.content[8] && (
            <div
              dangerouslySetInnerHTML={{
                __html: (vacancyContent.content[8] as HTMLElement).outerHTML,
              }}
            />
          )}
        </div>
      </div>
      <div className="s-60"></div>
      <div className="w-100 tc">
        <Link to={"https://job.buxonline.org/"} className="button">
          {vacancy.meta.apply_for_job}
        </Link>
      </div>
      <div className="s-100"></div>
    </Layout>
  );
};

export { SingleVacancy };
