import * as api from "../api/users";

export const getClients =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchClient();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await api.deleteUser(id);
     dispatch({ type:'DELETE', payload: id });
    } catch (error) {
     console.log(error);
    }
    };

    export const getSearchUser  =(InputSearch)  => async (dispatch) => {

      try {
       const {data}=  await api.fetchSearchedUser(InputSearch);
       dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
      } catch (error) {
       console.log('error action',error.message);
       
      }
      }; 

  export const getnomuser =(iduser)=> async (dispatch) => {

        try {
         const {data}=  await api.fetchNomUser(iduser);
         dispatch ({ type: 'FETCH_ALL', payload: data }) ;
    return data;
        } catch (error) {
         console.log('error action',error.message);
         
        }
        }; 