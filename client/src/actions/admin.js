import * as api from '../api/admin';


export const signinadmin = (signinData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(signinData);
  
      dispatch({ type: 'auth', data });
      history.push('/formateurs');
    } catch (error) {
      console.log(error);
    }
  };