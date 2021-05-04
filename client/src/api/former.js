import axios from "axios";

const url = "http://localhost:5030/former";
const url1 = "http://localhost:5030/former/trainings";

const url2 ="http://localhost:5030/former/signup";
const url3 = 'http://localhost:5030/paging/pageformer';
const url4 = 'http://localhost:5030/paging/pageshowformer';
const url5 = 'http://localhost:5030/paging/recentformer';
const url6 = 'http://localhost:5030/former/one';




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

export const fetchTrainingFormer = (id, page) => {
  return axios.get(url1,{params : {id , page}})
};