import axios from "axios";

const url = "http://localhost:5000/centre";

export const fetchSearchedCentres = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};