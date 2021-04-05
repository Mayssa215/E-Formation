import axios from "axios";

const url = "http://localhost:5010/centre";
const url2 = "http://localhost:5010/centre/signup";
const url3 = 'http://localhost:5010/paging/pagecentre';
const url4 = 'http://localhost:5010/paging/pageshowcentre';
const url5 = 'http://localhost:5010/paging/recentcentre';

const url6 = 'http://localhost:5010/centre/one';
const url7 ='http://localhost:5010/paging/trainingcenter';

export const fetchSearchedCentres = (InputSearch) => {
  return axios.get(url, {
    params: {
      InputSearch,
    
    },
  })
};
export const signUp= ( centreData) => axios.post(url2, centreData );


export const fetchCentre = (page,SpecialityIds,gouvernoratid,cityid,InputSearch) => {
  return axios.get(url3, {
    params: { page,SpecialityIds,gouvernoratid,cityid,InputSearch}
  })
};

export const fetchnotshowfilter = (page) => {
  return axios.get(url4, {
    params: { page}
  })
};
export const creatCentre = (newcentre) => axios.post(url, newcentre);
export const updateCentre = (id, updatedCentre) => axios.patch(`${url}/${id}`, updatedCentre);

export const fetchrecentCentre =(page)=> {
  return axios.get(url5, {
    params: { page}
  })
};


export const fetchOneCenter = (idcenter) => {
  return axios.get(url6,{params:{idcenter}})
};
export const fetchTrainingcenter = (page) => {
  return axios.get(url7, {
    params: { page}
  })
};