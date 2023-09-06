import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { Audio } from "react-loader-spinner";

function SingleVacancy() {
  const { id, language } = useParams();

  const [vacancy, setVacancy] = useState({});
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

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Audio color={"#2E85EC"} />
      </div>
    );
  }

  const paragraphs = vacancy.text.split("\n");

  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">{vacancy.title}</h3>
      <div className="row">
        <div className={`col-lg-11 px-4 m-4 ma ${language}`}>
          <div dangerouslySetInnerHTML={{ __html: vacancy.text }}></div>
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

export { SingleVacancy };
