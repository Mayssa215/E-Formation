import axios from "axios";
const url1 = 'http://localhost:5030/former/formers';
const url2 = 'http://localhost:5030/former/Allformers';

const url3= 'http://localhost:5030/former/delete';
const url4 ="http://localhost:5030/former/signup";
const url5 = 'http://localhost:5030/former/search';

export const fetchFormer = () => {
    return axios.get(url1)
  };
  export const fetchAllFormer = () => {
    return axios.get(url2)
  };
  export const deleteFormer = (id) => axios.delete(url3,{params:{id}});
  export const signUp = ( formerData ) => axios.post(url4, formerData);
  export const fetchSearchedFormer = (InputSearch) => {
    return axios.get(url5, { params: { InputSearch, }, })
  };
  
