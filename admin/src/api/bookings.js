import axios from "axios";

const url1 = 'http://localhost:5030/booking/booking';
const url2 = 'http://localhost:5030/booking/reserver';
const url3 = 'http://localhost:5030/booking';
const url4 =  'http://localhost:5030/booking/count';

export const fetchBookings = () => axios.get(url1);
  
export const reserverformation = (idtraining, RerservationData) => axios.post(url2,RerservationData, {params:{idtraining}});
export const fetchSearchedBooking =  (InputSearch) => {
  return axios.get(url3, { params: { InputSearch, }, })
};
export const fetchnumbervalider= () => axios.get(url4);

