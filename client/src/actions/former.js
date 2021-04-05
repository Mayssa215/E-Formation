import * as api from "../api/former";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export const getSearchedFormer = (InputSearch) => async (dispatch) => {

  try {
    const {data} =  await api.fetchSearchedFormer(InputSearch);
    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
    console.log(InputSearch);  
  } catch (error) {
    console.log('error action',error.message);
  }
} 

export const signupformer = (formerData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formerData);
    dispatch({ type: 'auth', data });
    history.push('/formateurs');
    toast.success(`Bienvenue ${data.result.lastname} !`);
  } catch (error) {
    console.log(error);
  }
}

export const creatFormer = (former) => async (dispatch) => {
  try {
      const {data} = await api.creatFormer(former);
      dispatch({ type:'CREATE', payload: data})
  }catch (error){
      console.log(error);

  }
};
export const updateFormer = (id, former) => async (dispatch) => {
  try {
    const { data } = await api.updateFormer(id, former);

    dispatch({ type: 'UPDATE' , payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getFormer =(page,age,SpecialityIds,sexe,InputSearch) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchFormer(page,age,SpecialityIds,sexe,InputSearch);
   console.log('page numero', page);

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};
export const getrecentFormer =(page) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchrecentFormer(page);
   console.log('page numero', page);

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};

export const getnotshowfilter =(page) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchnotshowfilter(page);
  // console.log('page numero', page);

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};

export const getOneFormer = (idformer) => async (dispatch)  => {
  
  try {
    const {data} =  await api.fetchOneFormer(idformer);
     dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};

