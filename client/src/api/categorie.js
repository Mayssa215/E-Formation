import axios from 'axios';

const url = 'http://localhost:5030/categorie';


export const fetchcategorie = () => axios.get(url);
