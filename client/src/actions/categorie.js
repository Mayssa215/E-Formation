import * as categorie from '../api/categorie.js';
export const getcategorie = () => async (dispatch) => {
    try {
        const {data} = await categorie.fetchcategorie();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
}