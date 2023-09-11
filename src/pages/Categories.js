import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Title } from "../components/elements/Title";
import { languagesList } from "../constants";
import { useMutation, useQuery } from "react-query";
import { fetchCategoriesRequest } from "../services/requests";
import { useSelector } from "react-redux";

function Categories() {
  const { language } = useSelector((state) => state.global);

  const { data: categories, isLoading } = useQuery(
    "fetch-categories",
    fetchCategoriesRequest
  );

  if (isLoading) {
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
            to={`/${language}/category/${el.id}/${el.role}/`}
            className={`button cat jcsb aic py-1 px-3 m-1`}
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
