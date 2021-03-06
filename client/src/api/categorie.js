import axios from 'axios';

const url = 'http://localhost:5000/categorie';


export const fetchcategorie = () => axios.get(url);
