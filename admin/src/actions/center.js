import * as api from "../api/center";
import 'react-toastify/dist/ReactToastify.css';
export const getCentre =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchCenter();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const getAllCenters = ()  => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchAllCenters();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };

  export const deleteCenter = (id) => async (dispatch) => {
    try {
      await api.deleteCenter(id);
     dispatch({ type:'DELETE', payload: id });
    } catch (error) {
     console.log(error);
    }
    };

    export const signupcentre = (centreData, history) => async (dispatch) => {
      try {
        const { data } = await api.signUp(centreData);
        dispatch({ type: 'auth', data });
        history.push('/centresdeformation');
    
      } catch (error) {
        console.log(error);
      }
    }

    export const getSearchCenter =(InputSearch)  => async (dispatch) => {

      try {
       const {data}=  await api.fetchSearchedCenter(InputSearch);
       dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
      } catch (error) {
       console.log('error action',error.message);
       
      }
      }; 