import axios from 'axios';

const url1 = 'http://localhost:5030/categorie';

const url2 = 'http://localhost:5030/categorie/search';


export const fetchcategorie = () => axios.get(url1);
export const categories =(CategorieData) =>axios.post(url1,CategorieData);
export const Updatecategorie = (id, updatedcategorie) => axios.patch(url1,updatedcategorie,{params:{id}});
export const fetchSearchedCategorie=  (InputSearch) => {
    return axios.get(url2, { params: { InputSearch, }, })
  };
  
  