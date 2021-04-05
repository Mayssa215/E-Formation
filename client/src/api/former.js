import axios from "axios";

const url = "http://localhost:5010/former";
const url2 ="http://localhost:5010/former/signup";
const url3 = 'http://localhost:5010/paging/pageformer';
const url4 = 'http://localhost:5010/paging/pageshowformer';
const url5 = 'http://localhost:5010/paging/recentformer';
const url6 = 'http://localhost:5010/former/one';

export const fetchSearchedFormer = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    },
  })
};
export const signUp = ( formerData ) => axios.post(url2, formerData);

export const fetchFormer = (page,age,SpecialityIds,sexe,InputSearch) => {
  return axios.get(url3, {
    params: { page,age,SpecialityIds,sexe,InputSearch}
  })
};
export const fetchnotshowfilter = (page) => {
  return axios.get(url4, {
    params: { page}
  })
};
export const creatFormer = (newformer) => axios.post(url, newformer);
export const updateFormer = (id, updatedFormer) => axios.patch(`${url}/${id}`, updatedFormer);

export const fetchrecentFormer=(page)=> {
  return axios.get(url5, {
    params: { page}
  })
};

export const fetchOneFormer = (idformer) => {
  return axios.get(url6,{params:{idformer}})
};