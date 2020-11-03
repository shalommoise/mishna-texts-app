import axios from "axios";

export const getTitle = (name) => {
  return axios
    .get(`https://www.sefaria.org/api/index/${name}`)
    .then((mishna) => {
      return mishna;
    });
};

export const getMishnaText = (name, number) => {
  return axios
    .get(`https://www.sefaria.org/api/texts/${name}.${number}`)
    .then((mishna) => {
      return mishna.data.he;
    });
};
