import axios from "axios";

const url = 'http://localhost:5010/training';

const url2 = 'http://localhost:5010/paging/page';
const url3 = 'http://localhost:5010/paging/pageshow';
const url4 = 'http://localhost:5010/paging/recent';
const url5 = 'http://localhost:5010/training/one';



export const fetchTraining = (page, value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch) => {
  return axios.get(url2, {
    params: { page,value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch }
  })
};
export const fetchrecentTraining = (page) => {
  return axios.get(url4, {
    params: { page}
  })
};
export const fetchnotshowfilter = (page) => {
  return axios.get(url3, {
    params: { page}
  })
};
export const fetchSearchedTraining = (InputSearch) => {
  return axios.get(url, { params: { InputSearch, }, })
};


export const creatTraining = (newformation) => axios.post(url, newformation);
export const updateTraining = (id, updatedFormation) => axios.patch(`${url}/${id}`, updatedFormation);
export const deleteTraining = (id) => axios.delete(`${url}/${id}`);

export const fetchOneTraining = (id) => {
  return axios.get(url5,{params:{id}})
};