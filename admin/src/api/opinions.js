import axios from 'axios';

const url1 = 'http://localhost:5030/opinion';
const url= 'http://localhost:5030/opinion/validation';
const url2 = 'http://localhost:5030/opinion/opinionchecked';
const url3 = 'http://localhost:5030/opinion/cancled';




export const fetchOpinions = () => axios.get(url1);
export const getvalidation = () => axios.get(url);
export const validation = (id) => axios.post(url2,null,{params:{id}});
export const annulation = (id) => axios.post(url3,null,{params:{id}});


