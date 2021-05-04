  
import * as api from "../api/centre";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getSearchedCentres = (InputSearch) => async (dispatch) => {

 try {
   const {data} =  await api.fetchSearchedCentres(InputSearch);

   dispatch ({ type: 'FETCH_ALL', payload: data }) ;
   console.log(InputSearch);  

    
 } catch (error) {
   console.log('error action',error.message);
 }
} 

export const creatCentre = (former) => async (dispatch) => {
  try {
      const {data} = await api.creatCentre(former);
      dispatch({ type:'CREATE', payload: data})
  }catch (error){
      console.log(error);

  }
};
export const updateCentre = (id, former) => async (dispatch) => {
  try {
    const { data } = await api.updateCentre(id, former);

    dispatch({ type: 'UPDATE' , payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getCentre =(page,SpecialityIds,gouvernoratid,cityid,InputSearch) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchCentres(page,SpecialityIds,gouvernoratid,cityid,InputSearch);
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

export const getrecentCentre = (page) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchrecentCentre(page);
   console.log('page numero', page);

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};
export const getOneCenter  = (idcenter) => async (dispatch)  => {
  
  try {
    const {data} =  await api.fetchOneCenter(idcenter);
     dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};
export const getTrainingcenter =(id, page) => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchTrainingcenter(id,page);


    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
     return data;
  } catch (error) {
    console.log('error action',error.message);
   
  }
};

export const signupcentre = (centreData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(centreData);
    dispatch({ type: 'auth', data });
    history.push('/formations');
    toast.success(`Bienvenue ${data.result.name} !`);

  } catch (error) {
    console.log(error);
  }
}
