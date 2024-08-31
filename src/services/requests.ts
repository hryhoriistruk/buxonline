import axios from './axios';

export const fetchHomeRequest = (language: string) =>
  axios.get(`/landing/${language}/`).then((res) => res.data);

export const fetchCategoriesRequest = () =>
  axios.get("/category/list/?lang=uk").then((res) => res.data);

export const fetchVacanciesListRequest = ({
  language: string,
  id: number,
  currentPage: number,
  perPage: number,
}) =>
  axios
    .get(
      `/vacancy/list/?lang=${language}&category=${id}&page=${currentPage}&per_page=${perPage}`
    )
    .then((res) => res.data);

export const fetchVacancyRequest = async ({ queryKey }: { queryKey: [any, { id: number, language: string }] }) => {
  const [_, { id, language }] = queryKey;
  return axios
    .get(`/vacancy/${id}?to_lang=${language}`)
    .then((res) => res.data);
};