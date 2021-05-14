import * as api from '../api/admin';


export const signinadmin = (signinData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(signinData);
  
      dispatch({ type: 'auth', data });
      history.push("/dash");
    } catch (error) {
      console.log(error);
    }
  };

  export const updateadmin = (id, userData,history) => async (dispatch) => {
    try {
      const { data } = await api.updateadmin(id, userData);

      dispatch({ type: 'UPDATE', data });
      history.push('/monprofil');

    } catch (error) {
      console.log(error);
    }
  };