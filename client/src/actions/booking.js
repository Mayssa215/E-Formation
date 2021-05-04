import * as api from '../api/booking';

export const Reserverformation = (idtraining, RerservationData) => async (dispatch) => {
    try {
      const { data } = await api.reserverformation(idtraining, RerservationData);

      dispatch({ type: 'CREATE1', data });
    } catch (error) {
      console.log(error);
    }
  };

  export const Getreservationbyid  = (iduser) => async (dispatch) => {
    try {
     const { data } =  await api.getreservationbyid(iduser); 
     dispatch ({ type: 'FETCH_ALL1',  data }) ;
      return data;
    } catch (error) {
     console.log('error action',error.message);
    }
    };
    export const Getreserved  = (iduser,page) => async (dispatch) => {
      try {
       const { data } =  await api.getreservedtraining(iduser,page); 
       dispatch ({ type: 'FETCH_ALL1',  data }) ;
        return data;
      } catch (error) {
       console.log('error action',error.message);
      }
      };
      export const Annuleréservation= (iduser,idtraining) => async (dispatch) => {
        try {
          await api.annulerréservation(iduser,idtraining);
         dispatch({ type:'DELETE1', payload: idtraining });
        } catch (error) {
         console.log(error.message);
        }
        };
        export const réservationCancled= (iduser,idtraining) => async (dispatch) => {
          try {
            await api.réservationCancled(iduser,idtraining);
           dispatch({ type:'DELETE1', payload: idtraining });
          } catch (error) {
           console.log(error.message);
          }
          };
      