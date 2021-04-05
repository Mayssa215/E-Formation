import axios from 'axios';

const url = 'http://localhost:5010/gouvernorat';


export const fetchgouvernorat = () => axios.get(url);