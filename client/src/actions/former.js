import * as api from "../api/former";

 export const getSearchedFormer = (InputSearch) => async (dispatch) => {

  try {
    const {data} =  await api.fetchSearchedFormer(InputSearch);

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
    console.log(InputSearch);  

     
  } catch (error) {
    console.log('error action',error.message);
  }
} 