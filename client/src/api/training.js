import axios from "axios";

const url = 'http://localhost:5006/training';

const url2 = 'http://localhost:5006/paging/page';

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