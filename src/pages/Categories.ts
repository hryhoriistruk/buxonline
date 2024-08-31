import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Title } from '../components/elements/Title';
import { languagesList } from '../constants';
import { useMutation, useQuery } from 'react-query';
import { fetchCategoriesRequest } from '../services/requests';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { metaData } from '../constants/metaData';

interface Category {
  id: number;
  role: string;
  vacancies_count: number;
}

function Categories() {
  const { language } = useSelector((state) => state.global);
  const [title, setTitle] = useState<string>('Категорії');

  const { data: categories, isLoading } = useQuery(
    'fetch-categories',
    fetchCategoriesRequest
  );

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
        title={`${metaData["categories"].title}${title}`}
        description={metaData["categories"].description}
        canonical={`/${language}/${metaData["categories"].canonical}`}
      >
        <Title setTitle={setTitle} />
        <div className="w-100 mx-4 px-2">
          {categories.map((el: Category) => (
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
      </Layout>
    </>
  );
}

export { Categories };