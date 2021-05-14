import * as api from "../api/favorite";

export const getFavorite =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchFavorite();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };