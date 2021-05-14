import * as api from '../api/authentification';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const signup = (signData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(signData);
     
      dispatch({ type: 'auth', data });
      history.push('/clients');
    } catch (error) {
      console.log(error);
    }
  };

  export const signinuser = (signinData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(signinData);
      dispatch({ type: 'auth', data });
      if (data.result.Role === 'formateur') {
      history.push('/formateurs') ;
      toast.success(`Bienvenue ${data.result.lastname} !`);

    }
    else if 
      (data.result.Role === 'client'){
        toast.success(`Bienvenue ${data.result.prenom} !`);
        history.push('/') ;
    }
    else if (data.result.Role === 'centre'){
      toast.success(`Bienvenue ${data.result.name} !`);
      history.push('/formations') ;
    }
    } catch (error) {
      console.log(error);
      toast.error('Email ou mot de passe invalide');
    }
  };

  export const forgetpassword = (emailData) => async (dispatch) => {

    try {
      const  {data} = await api.forgetpass(emailData);
      dispatch({type :'forget', data});
      toast.success(' Un email a été  envoye, Verifier votre boite mail ');

    } catch (error) {
      console.log(error);
      toast.error('Email introuvable');
    }
  };
  export const resetpassword = (resetinfos , history) => async (dispatch) => {
    try 
    {
      const {data} = await api.restpass(resetinfos);
      dispatch ({type:'reset', data });
      toast.success(' Votre mot de passe a été modifier avec succées! ');
      history.push('/');
    }
    catch (error){
      toast.error(' Lien  invalide ');
  

    }
  };
  export const updateformer = (id, userData,history) => async (dispatch) => {
    try {
      const { data } = await api.updateformer(id, userData);

      dispatch({ type: 'UPDATE', data });
      history.push('/formateurs');

    } catch (error) {
      console.log(error);
    }
  };
  export const Updatecenter = (id, userData,history) => async (dispatch) => {
    try {
      const { data } = await api.Updatecenter(id, userData);

      dispatch({ type: 'UPDATE', data });
      history.push('/centresdeformation');

    } catch (error) {
      console.log(error);
    }
  };
  export const UpdateUser = (id, userData,history) => async (dispatch) => {
    try {
      const { data } = await api.UpdateUser(id, userData);

      dispatch({ type: 'UPDATE', data });
      history.push('/clients');

    } catch (error) {
      console.log(error);
    }
  };