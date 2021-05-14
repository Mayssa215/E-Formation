import axios from "axios";
const url = "http://localhost:5030/training/creatTrainingformer";
const ur3 = "http://localhost:5030/training/creatTrainingcenter";
const url1 = "http://localhost:5030/training/trainingscenter";
const url2 = "http://localhost:5030/training/trainingsformer";
const url4 = "http://localhost:5030/training/trainingsadmin";
const url5 = "http://localhost:5030/training/search";
const url0 = "http://localhost:5030/training/trainingbyid";
const url8 = "http://localhost:5030/training/update";
const url9 = "http://localhost:5030/training/delete";
const url6 = "http://localhost:5030/training/all";
const url7 = "http://localhost:5030/training/categtraining";
const url10 = "http://localhost:5030/training/months";

export const fetchTrainings = () => axios.get(url1);
export const fetchAllTrainings = () => axios.get(url6);

export const fetchTrainingsformer = () => axios.get(url2);
export const fetchTrainingsadmin = () => axios.get(url4);

export const fetchTrainingbyid = (id) => {
  return axios.get(url0, { params: { id } });
};
export const updateTraining = (id, updatedFormation) =>
  axios.patch(url8, updatedFormation, { params: { id } });
export const deleteTraining = (id) => axios.delete(url9, { params: { id } });
export const creatTrainingformer = (newformation) =>
  axios.post(url, newformation);
export const creatTrainingcenter = (newformation) =>
  axios.post(ur3, newformation);
export const fetchSearchedTraining = (InputSearch) => {
  return axios.get(url5, { params: { InputSearch } });
};
export const fetchTrainingcateg = () => {
  return axios.get(url7);
};
export const fetchTrainingmonths = () => {
  return axios.get(url10);
};