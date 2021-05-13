import * as api from "../api/opinion";

export const createOpinion = (newOpinion) => async (dispatch) => {
    try {
        const {data} = await api.createOpinion(newOpinion);
        dispatch({ type:'CREATE3', payload: data})
    }catch (error){
        console.log(error);
  
    }
  };
  export const getOpinions = (idtraining) => async (dispatch) => {
    try {
      const { data } = await api.gettrainingopinions(idtraining);
      dispatch({ type: 'FETCH_ALL', payload: data });
      return data;
    } catch (error) {
      console.log('error action', error.message);
    }
  };