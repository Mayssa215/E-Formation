import axios from 'axios';

const url = 'http://localhost:5007/categorie';


export const fetchcategorie = () => axios.get(url);
