import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Title } from "../components/elements/Title";

function Categories() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "uk"
  );

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  useEffect(() => {
    const detectedLanguage = i18n.language || "uk";
    language ? setLanguage(language) : setLanguage(detectedLanguage);
    localStorage.setItem("language", language);
  }, [language, i18n.language]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api-dev.buxonline.org/api/v1/category/list/?lang=uk`;
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при запросе:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Audio color={"#2E85EC"} />
      </div>
    );
  }

  return (
    <>
      <Title />
      <div className="w-100 mx-4 px-2">
        {categories.map((el) => (
          <Link
            onClick={() => {
              setSelectedCategoryName(el.role);
              setLanguage(language);
            }}
            to={`/category/${el.id}/${el.role}/${language}`}
            className={`button cat jcsb aic py-1 px-3 m-1 ${
              selectedCategoryName === el.role ? "active" : ""
            }`}
            key={el.id}
          >
            <span className="fz-14">{el.role}</span>
            <span className="fz-14">{el.vacancies_count}</span>
          </Link>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  );
}

export { Categories };
