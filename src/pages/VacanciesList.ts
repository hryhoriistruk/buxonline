import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import CustomPagination from '../components/Pagination/CustomPagination';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { fetchVacanciesListRequest } from '../services/requests';
import Layout from '../components/Layout';
import { metaData } from '../constants/metaData';

function VacanciesList() {
  const { language } = useSelector((state) => state.global);
  const { id, name } = useParams();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(null);
  const perPage = 9;

  const { mutate: fetchVacanciesList } = useMutation(
    fetchVacanciesListRequest,
    {
      onSuccess: (responseData) => {
        if (!currentPage) {
          const totalVacancies = responseData.count;

          const queryString = window.location.search;
          const queryParams = new URLSearchParams(queryString);
          const page = queryParams.get('page');

          const totalPages = Math.ceil(totalVacancies / perPage);

          const currentPage = !Number.isInteger(Number(page))
            ? 1
            : page <= 0
            ? 1
            : page > totalPages
            ? totalPages
            : page;
          setCurrentPage(currentPage);
        } else {
          setData(responseData);
          setIsLoading(false);
        }
      },
    }
  );

  useEffect(() => {
    fetchVacanciesList(
      currentPage
        ? { language, id, currentPage, perPage }
        : { language, id, currentPage: 1, perPage }
    );
    setIsLoading(true);
  }, [currentPage, language]);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Audio color="#2E85EC" />
      </div>
    );
  }

  return (
    <>
      <Layout
        title={`${metaData['vacancies'].title}${name}`}
        description={metaData['vacancies'].description}
        canonical={`${language}${metaData['vacancies'].canonical}/${id}/${name.replaceAll(' ', '%20')}`}
      >
        <div className="s-40"></div>
        <h3 className="title-part mx-2">{name}</h3>
        <div className="s-20"></div>
        <div className="row">
          {data.results.map((el) => (
            <div className="col-lg-4 px-4 my-4" key={el.id}>
              <h4 className="c-blue">{el.title ? el.title : el.role}</h4>
              <p className="c-dark my-3">
                {el.text.length > 200
                  ? el.text.substring(0, 200) + '...'
                  : el.text}
              </p>
              <div className="s-10"></div>
              <Link to={`/${language}/vacancy/${el.id}`} className="button">
                {el.meta.more}
              </Link>
            </div>
          ))}
        </div>
        <div className="s-20"></div>
        <div className="d-flex justify-content-center">
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPage}
            totalVacancies={data.count}
          />
        </div>
        <div className="s-100"></div>
      </Layout>
    </>
  );
}

export { VacanciesList };