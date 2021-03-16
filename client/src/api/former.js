import axios from "axios";

const url = "http://localhost:5007/former";

export const fetchSearchedFormer = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};
