import axios from 'axios';

const url = 'http://localhost:5030/gouvernorat';


export const fetchgouvernorat = () => axios.get(url);