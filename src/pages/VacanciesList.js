import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { HiChevronRight } from "react-icons/hi2";
import cats from "../data/cats";
import CustomPagination from "../components/Pagination/CustomPagination";

function VacanciesList() {
  const { id, name, language } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(null);
  const perPage = 10;

  useEffect(() => {
    if (currentPage) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=${language}&category=${id}&page=${currentPage}`
          );
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Ошибка при запросе:", error);
          setLoading(false);
        }
      };
      localStorage.setItem("language", language);
      fetchData();
    }
  }, [id, language, currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=${language}&category=${id}`
        );
        const totalVacancies = response.data.count;

        const queryString = window.location.search;
        const queryParams = new URLSearchParams(queryString);
        const page = queryParams.get("page");

        const totalPages = Math.ceil(totalVacancies / perPage);
        const currentPage = !Number.isInteger(page)
          ? 1
          : page <= 0
          ? 1
          : page > totalPages
          ? totalPages
          : page;

        setCurrentPage(currentPage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">
        <Link to="/categories" className="c-blue">
          {cats[0].ru.page[1]} <HiChevronRight />{" "}
        </Link>
        {name}
      </h3>
      <div className="s-50"></div>
      <div className="row">
        {data.results.map((el) => (
          <div className="col-lg-4 px-4 my-4" key={el.id}>
            <h4 className="c-blue">{el.title ? el.title : el.role}</h4>
            <p className="c-dark my-3">
              {el.text.length > 200
                ? el.text.substring(0, 200) + "..."
                : el.text}
            </p>
            <div className="s-10"></div>
            <Link to={`/vacancy/${el.id}/${language}`} className="button">
              {el.meta.more}
            </Link>
          </div>
        ))}
      </div>
      <div className="s-20"></div>
      <div className="row justify-content-center">
        <CustomPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          totalVacancies={data.count}
        />
      </div>
      <div className="s-100"></div>
    </>
  );
}

export { VacanciesList };
