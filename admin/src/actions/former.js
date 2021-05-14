import * as api from "../api/former";
import 'react-toastify/dist/ReactToastify.css';
export const getFormer =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchFormer();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };

  export const getAllFormers = ()  => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchAllFormer();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };

  export const deleteFormer = (id) => async (dispatch) => {
    try {
      await api.deleteFormer(id);
     dispatch({ type:'DELETE', payload: id });
    } catch (error) {
     console.log(error);
    }
    };

    export const signupformer = (formerData, history) => async (dispatch) => {
      try {
        const { data } = await api.signUp(formerData);
        dispatch({ type: 'auth', data });
        history.push('/formateurs');
      } catch (error) {
        console.log(error);
      }
    }
    export const getSearchFormer =(InputSearch)  => async (dispatch) => {

      try {
       const {data}=  await api.fetchSearchedFormer(InputSearch);
       dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
      } catch (error) {
       console.log('error action',error.message);
       
      }
      }; 