import axios from "axios";
const url0 = "http://localhost:5030/centre/signup";

const url1 = 'http://localhost:5030/centre/centers';
const url2 = 'http://localhost:5030/centre/centers';
const url3= 'http://localhost:5030/centre/delete';
const url4 = 'http://localhost:5030/centre/search';

export const fetchCenter = () => {
    return axios.get(url1)
  };

  export const fetchAllCenters  = () => {
    return axios.get(url2)
  };

  export const deleteCenter = (id) => axios.delete(url3,{params:{id}});
  export const signUp= ( centreData) => axios.post(url0, centreData );
  export const fetchSearchedCenter = (InputSearch) => {
    return axios.get(url4, { params: { InputSearch, }, })
  };
  
