import axios from "axios";

const url1 = 'http://localhost:5030/favorite';


export const fetchFavorite = () => axios.get(url1);