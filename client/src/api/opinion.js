import axios from 'axios';

const url = 'http://localhost:5030/opinion';


export const createOpinion = (newOpinion) => axios.post(url,newOpinion);