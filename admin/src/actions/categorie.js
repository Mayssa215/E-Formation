import * as api from '../api/categorie.js';
export const getcategorie = () => async (dispatch) => {
    try {
        const {data} = await api.fetchcategorie();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
};

export const categorie = (CategorieData) => async (dispatch) => {
    try {
      const { data } = await api.categories(CategorieData);

      dispatch({ type: 'CREATE', data });
    } catch (error) {
      console.log(error);
    };
  };

  export const Updatecategorie = (id, updatedcategorie) => async (dispatch) => {
    try {
     const { data } = await api.Updatecategorie(id, updatedcategorie);
    
     dispatch({ type: 'UPDATE' , payload: data });

    } catch (error) {
     console.log(error);
    }
    };

   export const getSearchCategorie  =(InputSearch)  => async (dispatch) => {

    try {
     const {data}=  await api.fetchSearchedCategorie(InputSearch);
     dispatch ({ type: 'FETCH_ALL', payload: data }) ;
return data;
    } catch (error) {
     console.log('error action',error.message);
     
    }
    }; 