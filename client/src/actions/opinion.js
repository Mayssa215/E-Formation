import * as api from "../api/opinion";

export const createOpinion = (newOpinion) => async (dispatch) => {
    try {
        const {data} = await api.createOpinion(newOpinion);
        dispatch({ type:'CREATE3', payload: data})
    }catch (error){
        console.log(error);
  
    }
  };