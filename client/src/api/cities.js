import axios from 'axios';

const url = 'http://localhost:5006/cities';


export const fetchCity= () => axios.get(url);