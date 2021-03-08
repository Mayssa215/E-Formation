import * as gouvernorat from '../api/gouvernorat.js';


export const getgouvernorat = () => async (dispatch) => {
    try {
        const {data} = await gouvernorat.fetchgouvernorat();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
}