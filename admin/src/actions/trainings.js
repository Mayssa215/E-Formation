import * as api from '../api/trainings';

export const getTrainings =() => async (dispatch)=> {

    try {
      const {data} =  await api.fetchTrainings();
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
      
    }
  }; 

  export const getSearchTraining =(InputSearch)  => async (dispatch) => {

    try {
     const {data}=  await api.fetchSearchedTraining(InputSearch);
     dispatch ({ type: 'FETCH_ALL', payload: data }) ;
return data;
    } catch (error) {
     console.log('error action',error.message);
     
    }
    }; 
  export const getAllTrainings =() => async (dispatch)=> {

    try {
      const {data} =  await api.fetchAllTrainings();
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
      
    }
  }; 
  export const getTrainingsformer =() => async (dispatch)=> {

    try {
      const {data} =  await api.fetchTrainingsformer();
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
      
    }
  }; 

  export const getTrainingsadmin =() => async (dispatch)=> {

    try {
      const {data} =  await api.fetchTrainingsadmin();
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
      
    }
  };


  export const getTrainingbyid = (id) => async (dispatch) =>{

    try {
      const {data} =  await api.fetchTrainingbyid(id);
    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
    return data;
  } catch (error) {
   console.log('error action',error.message);
  
    }
  }

  export const updateTraining = (id, formation, history) => async (dispatch) => {
    try {
     const { data } = await api.updateTraining(id, formation);
    
     dispatch({ type: 'UPDATEf' , payload: data });
     history.push('/Formations');

    } catch (error) {
     console.log(error);
    }
    };
    
    export const deleteTraining = (id) => async (dispatch) => {
    try {
      await api.deleteTraining(id);
     dispatch({ type:'DELETE', payload: id });

    } catch (error) {
     console.log(error);
    }
    };

    export const creatTrainingformer = (formation) => async (dispatch) => {
      try {
          const {data} = await api.creatTrainingformer(formation);
          dispatch({ type:'CREATE', payload: data})
      }catch (error){
          console.log(error);
      }
    };
    export const creatTrainingcenter = (formation) => async (dispatch) => {
      try {
          const {data} = await api.creatTrainingcenter(formation);
          dispatch({ type:'CREATE', payload: data})
      }catch (error){
          console.log(error);
      }
    };
    export const getTrainingcateg = () => async (dispatch) =>{

      try {

        const {data} =  await api.fetchTrainingcateg();
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
     console.log('error action',error.message);
    
      }
    };
    export const getTrainingmonths  = () => async (dispatch) =>{

      try {

        const {data} =  await api.fetchTrainingmonths();
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
      return data;
    } catch (error) {
     console.log('error action',error.message);
    
      }
    };