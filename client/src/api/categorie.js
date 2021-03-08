import axios from 'axios';

const url = 'http://localhost:5006/categorie';


export const fetchcategorie = () => axios.get(url);
