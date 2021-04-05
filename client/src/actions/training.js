  
import * as api from "../api/training";

export const getSearchedTraining = (InputSearch) => async (dispatch) => {

try {
 const {data}=  await api.fetchSearchedTraining(InputSearch);

 dispatch ({ type: 'FETCH_ALL', payload: data }) ;
 console.log(InputSearch);  

  
} catch (error) {
 console.log('error action',error.message);
 
}
}; 

export const getTraining =(page,value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch) => async (dispatch) => {

try {
 const {data} =  await api.fetchTraining(page,value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch);
// console.log('page numero', page);

 dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
} catch (error) {
 console.log('error action',error.message);

}
};
export const getnotshowfilter =(page) => async (dispatch) => {

try {
 const {data} =  await api.fetchnotshowfilter(page);
// console.log('page numero', page);

 dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
} catch (error) {
 console.log('error action',error.message);

}
};

export const creatTraining = (formation) => async (dispatch) => {
try {
   const {data} = await api.creatTraining(formation);
   dispatch({ type:'CREATE', payload: data})
}catch (error){
   console.log(error);

}
};

export const updateTraining = (id, formation) => async (dispatch) => {
try {
 const { data } = await api.updateTraining(id, formation);

 dispatch({ type: 'UPDATE' , payload: data });
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
export const getrecentTraining  =(page) => async (dispatch) => {

try {
 const {data} =  await api.fetchrecentTraining(page);


 dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
} catch (error) {
 console.log('error action',error.message);

}
};
export const getOneTraining = (id) => async (dispatch)  => {

try {
 const {data} =  await api.fetchOneTraining(id);
  dispatch ({ type: 'FETCH_ALL', payload: data }) ;
  return data;
} catch (error) {
 console.log('error action',error.message);

}
};