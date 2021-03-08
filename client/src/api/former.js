import axios from "axios";

const url = "http://localhost:5006/former";

export const fetchSearchedFormer = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};
