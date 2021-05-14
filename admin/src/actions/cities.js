import * as cities from '../api/cities';


export const getCity = () => async (dispatch) => {

  try {
    const {data} =  await cities.fetchCity();

    dispatch ({ type: 'FETCH_ALL', payload: data }) ;
    return data;
  } catch (error) {
    console.log('error action',error.message);
    
  }
}; 