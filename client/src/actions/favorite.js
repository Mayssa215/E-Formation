import * as api from '../api/favorite';

export const Favoritetraining = (favoritedata) => async (dispatch) => {
  try {
    const { data } = await api.favoritetraining(favoritedata);

    dispatch({ type: 'CREATE2', data });
  } catch (error) {
    console.log(error);
  }
};

export const Getfavoritebyid = (iduser) => async (dispatch) => {
  try {
    const { data } = await api.getfavoritebyid(iduser);
    dispatch({ type: 'FETCH_ALL2', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};
export const Deletefavoritetraining = (iduser, idtraining) => async (dispatch) => {
  try {
    const { data } = await api.deletefavoritetraining(iduser, idtraining);
    dispatch({ type: 'Delete', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};

export const Getfavoritetrainings = (iduser, page) => async (dispatch) => {
  try {
    const { data } = await api.getfavoritetraining(iduser, page);
    dispatch({ type: 'FETCH_ALL2', data });
    return data;
  } catch (error) {
    console.log('error action', error.message);
  }
};
export const Filtrerfavorite = (iduser, idtraining) => async (dispatch) => {
  try {
     await api.deletefavoritetraining(iduser, idtraining);
    dispatch({ type: 'Delete1', idtraining });
  } catch (error) {
    console.log('error action', error.message);
  }
};


