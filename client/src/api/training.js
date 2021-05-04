import axios from "axios";

const url = 'http://localhost:5030/training';
const url1 = 'http://localhost:5030/training/center';
const url0 = 'http://localhost:5030/training/trainingbyid';
const url2 = 'http://localhost:5030/paging/page';
const url3 = 'http://localhost:5030/paging/pageshow';
const url4 = 'http://localhost:5030/paging/recent';
const url5 = 'http://localhost:5030/training/one';

const url6= 'http://localhost:5030/training/update';

const url7= 'http://localhost:5030/training/delete';
const url8 = 'http://localhost:5030/training/all';
const url9 = 'http://localhost:5030/training/nameformer';
const url10= 'http://localhost:5030/training/deletebycenter';


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

export const creatTraining = (newformation,id) => axios.post(url, newformation,{params:{id}});
export const creatTrainingcenter = (newformation,id) => axios.post(url1, newformation,{params:{id}});



export const updateTraining = (id, updatedFormation) => axios.patch(url6,updatedFormation,{params:{id}});
export const deleteTraining = (id,idformer) => axios.delete(url7,{params:{id,idformer}});
export const deleteTrainingCenter = (id,idcenter) => axios.delete(url10,{params:{id,idcenter}});

export const fetchOneTraining = (id) => {
  return axios.get(url5,{params:{id}})
};
export const fetchTrainingbyid = (id) => {
  return axios.get(url0,{params:{id}})
};

export const fetchTrainings=() => axios.get(url8);
export const fetchnameFormer =() => axios.get(url9);