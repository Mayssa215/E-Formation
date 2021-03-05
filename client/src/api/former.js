import axios from "axios";

const url = "http://localhost:5000/formateur";

export const fetchSearchedFormer = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};
