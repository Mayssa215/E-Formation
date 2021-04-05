import axios from 'axios';

const url = 'http://localhost:5010/categorie';


export const fetchcategorie = () => axios.get(url);
