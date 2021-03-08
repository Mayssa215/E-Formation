import axios from "axios";

const url = "http://localhost:5006/centre";

export const fetchSearchedCentres = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};