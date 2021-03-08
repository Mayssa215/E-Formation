import axios from 'axios';

const url = 'http://localhost:5006/gouvernorat';


export const fetchgouvernorat = () => axios.get(url);