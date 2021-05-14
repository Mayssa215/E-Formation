import * as api from "../api/bookings";

export const getBookings =() => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchBookings();
     
  
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };
  export const Countvalidation =() => async (dispatch) => {
    try {
      const {data} =  await api.fetchnumbervalider();
      dispatch ({ type: 'FETCH_ALL', payload: data }) ;
       return data;
    } catch (error) {
      console.log('error action',error.message);
     
    }
  };

  export const Reserverformation = (idtraining, RerservationData) => async (dispatch) => {
    try {
      const { data } = await api.reserverformation(idtraining, RerservationData);

      dispatch({ type: 'CREATE1', data });
    } catch (error) {
      console.log(error);
    }
  };

  export const getSearchBooking  =(InputSearch)  => async (dispatch) => {

    try {
     const {data}=  await api.fetchSearchedBooking(InputSearch);
     dispatch ({ type: 'FETCH_ALL', payload: data }) ;
return data;
    } catch (error) {
     console.log('error action',error.message);
     
    }
    }; 