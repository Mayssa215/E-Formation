import axios from 'axios';

const url = 'http://localhost:5030/cities';


export const fetchCity= () => axios.get(url);