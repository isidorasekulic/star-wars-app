import axios from "axios";

const url = "https://swapi.dev/api/";

export const getCategories = () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getDataByCategory = (categoryUrl) => {
  return axios
    .get(categoryUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCategoryItem = (categoryItemUrl) => {
  return axios
    .get(categoryItemUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
