import * as api from '../api/opinions.js';
export const getOpinions = () => async (dispatch) => {
    try {
        const {data} = await api.fetchOpinions();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
};

export const getvalidation = () => async (dispatch) => {
    try {
        const {data} = await api.getvalidation();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
};
export const Opinionvalidated=(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.validation(id);
      dispatch ({ type: 'Update',  data }) ;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

  export const Annulation=(id) => async (dispatch) => {
    try {
      const {data} =  await api.annulation(id);
      dispatch ({ type: 'Update', data }) ;
    } catch (error) {
      console.log('error action',error.message);
    }
  };