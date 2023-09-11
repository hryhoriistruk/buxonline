import axios from "./axios";

export const fetchHomeRequest = (language) =>
  axios.get(`/landing/${language}/`).then((res) => res.data);

export const fetchCategoriesRequest = () =>
  axios.get("/category/list/?lang=uk").then((res) => res.data);

export const fetchVacanciesListRequest = ({
  language,
  id,
  currentPage,
  perPage,
}) =>
  axios
    .get(
      `/vacancy/list/?lang=${language}&category=${id}&page=${currentPage}&per_page=${perPage}`
    )
    .then((res) => res.data);

export const fetchVacancyRequest = async ({ queryKey }) => {
  const [_, { id, language }] = queryKey;
  return axios
    .get(`/vacancy/${id}?to_lang=${language}`)
    .then((res) => res.data);
};
