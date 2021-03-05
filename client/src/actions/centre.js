  
import * as api from "../api/centre";

export const getSearchedCentres = (InputSearch) => async (dispatch) => {

 try {
   const {data} =  await api.fetchSearchedCentres(InputSearch);

   dispatch ({ type: 'FETCH_ALL', payload: data }) ;
   console.log(InputSearch);  

    
 } catch (error) {
   console.log('error action',error.message);
 }
} 