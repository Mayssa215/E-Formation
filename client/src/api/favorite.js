import axios from 'axios';

const url = 'http://localhost:5030/favorite';
const url1= 'http://localhost:5030/favorite/getfavorite';
const url2= 'http://localhost:5030/favorite/delete';
const url3= 'http://localhost:5030/favorite/favoritetrainings';



export const favoritetraining = (favoritedata) => axios.post(url,favoritedata);
export const  getfavoritebyid = (iduser) => axios.get(url1, {params: {iduser}});
export const  deletefavoritetraining = (iduser,idtraining) => axios.delete(url2, {params: {iduser,idtraining}});
export const  getfavoritetraining = (iduser,page) => axios.get(url3, {params: {iduser,page}});
    