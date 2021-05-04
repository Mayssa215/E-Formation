import axios from "axios";
const url0 = "http://localhost:5030/centre/signup";
const url = "http://localhost:5030/centre";
const url2 = 'http://localhost:5030/paging/pagecentre';
const url3 = 'http://localhost:5030/paging/pageshowcentre';
const url4 = 'http://localhost:5030/paging/recentcentre';

const url5 = 'http://localhost:5030/centre/one';
const url6 ='http://localhost:5030/centre/training';
export const fetchSearchedCentres = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};
export const fetchCentres = (page,SpecialityIds,gouvernoratid,cityid,InputSearch) => {
  return axios.get(url2, {
    params: { page,SpecialityIds,gouvernoratid,cityid,InputSearch}
  })
};

export const fetchnotshowfilter = (page) => {
  return axios.get(url3, {
    params: { page}
  })
};
export const creatCentre = (newcentre) => axios.post(url, newcentre);
export const updateCentre = (id, updatedCentre) => axios.patch(`${url}/${id}`, updatedCentre);

export const fetchrecentCentre =(page)=> {
  return axios.get(url4, {
    params: { page}
  })
};


export const fetchOneCenter = (idcenter) => {
  return axios.get(url5,{params:{idcenter}})
};
export const fetchTrainingcenter = (id,page) => {
  return axios.get(url6, {
    params: {id, page}
  })
};


export const signUp= ( centreData) => axios.post(url0, centreData );