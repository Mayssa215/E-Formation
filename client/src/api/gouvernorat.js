import axios from 'axios';

const url = 'http://localhost:5007/gouvernorat';


export const fetchgouvernorat = () => axios.get(url);