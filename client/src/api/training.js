import axios from "axios";

const url = 'http://localhost:5000/formation';

const url2 = 'http://localhost:5000/pagination/page';

export const fetchTraining = (page) => {
  return axios.get(url2, {
    params: { page, },
  })
};

export const fetchSearchedTraining = (InputSearch) => {
  return axios.get(url, { params: { InputSearch, }, })
};

export const creatTraining = (newformation) => axios.post(url, newformation);
export const updateTraining = (id, updatedFormation) => axios.patch(`${url}/${id}`, updatedFormation);
export const deleteTraining = (id) => axios.delete(`${url}/${id}`);