import axios from 'axios';

const url = 'http://localhost:5007/cities';


export const fetchCity= () => axios.get(url);