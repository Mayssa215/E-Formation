import * as api from '../api/categorie.js';
export const getcategorie = () => async (dispatch) => {
    try {
        const {data} = await api.fetchcategorie();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
}

export const getcategories = (userid) => async (dispatch) => {
    try {
        const {data} = await api.fetchcategories(userid);
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
}