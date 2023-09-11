import _axios from "axios";

const baseURL = "https://api-dev.buxonline.org/api/v1/";

const axios = _axios.create({ baseURL });

export default axios;
