import axios from 'axios';

const url = 'http://localhost:5010/cities';


export const fetchCity= () => axios.get(url);